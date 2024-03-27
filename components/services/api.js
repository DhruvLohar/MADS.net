import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const API_URL = "http://127.0.0.1:8000";
export const API_URL = "http://192.168.1.2:8000/";
    
export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export const axiosAuthorized = async () => {
    let instance = axios.create({
        baseURL: API_URL,
        headers: {
            "Content-Type": "application/json"
        }
    });

    try {
        const token = await AsyncStorage.getItem('accessToken');

        if (token) {
            instance = axios.create({
                baseURL: API_URL,
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            return instance;
        } else {
            console.error('Token not found in storage.');
            return instance;
        }
    } catch (error) {
        console.error('Error retrieving token:', error);
        return instance;
    }
};