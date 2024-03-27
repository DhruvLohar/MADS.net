import axios from "axios"

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URL = "http://192.168.1.2:8000/";
export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: false
    })

    const [sessionLoaded, setSessionLoaded] = useState(false)

    useEffect(() => {
        const checkSession = async () => {
            const res = await AsyncStorage.getItem('token')
            if (res) {
                console.log("User Session Found")

                axios.defaults.headers.common['Authorization'] = `Bearer ${res}`
                setAuthState({
                    token: res,
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

            await AsyncStorage.multiSet([['token', data.token], ['username', data.name], ['userid', data.id?.toString()]])

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