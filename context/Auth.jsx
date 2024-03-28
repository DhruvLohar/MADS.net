import axios from "axios"

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const domain = "192.168.172.42:8000"
export const API_URL = `http://${domain}/`;
export const MEDIA_URL = `http://${domain}`;
export const WS_URL = `ws://${domain}`

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        token: null,
        userId: null,
        username: null,
        profileImage: null,
        authenticated: false
    })

    const [sessionLoaded, setSessionLoaded] = useState(false)

    useEffect(() => {
        const checkSession = async () => {
            const res = await AsyncStorage.getItem('token')
            const uid = await AsyncStorage.getItem('userid')
            const name = await AsyncStorage.getItem('username')
            const pfp = await AsyncStorage.getItem('profileImage')

            if (res && uid && name) {
                console.log("User Session Found")

                axios.defaults.headers.common['Authorization'] = `Bearer ${res}`
                setAuthState({
                    token: res,
                    userId: uid,
                    username: name,
                    profileImage: pfp,
                    authenticated: true
                })
            }
            setSessionLoaded(true)
        }

        checkSession()
    }, [])

    const login = async (email, password) => {
        console.log("Processing Login : ", email, password)
        
        try {
            const { data } = await axios.post("student/login/", { email, password  })
        
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

            await AsyncStorage.multiSet([
                ['token', data.token], ['username', data.name], 
                ['userid', data.id?.toString()],
                ['profileImage', data.profileImage],
            ])
            setAuthState({
                token: data.token,
                userId: data.id,
                username: data.name,
                profileImage: data.profileImage,
                authenticated: true
            })

            return { error: false, data };
        } catch (e) {
            return { error: true, data: e.response.data.message }
        }
    }

    const logout = async () => {
        console.log("Processing Logout")

        await AsyncStorage.multiRemove(['token', 'username', 'userid'])

        axios.defaults.headers.common['Authorization'] = ''

        setAuthState({
            token: null,
            userId: null,
            username: null,
            profileImage: null,
            authenticated: false
        })
    }

    const value = {
        authState,
        sessionLoaded,
        onLogin: login,
        onLogout: logout
    }

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}