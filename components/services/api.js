import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const API_URL = "http://127.0.0.1:8000";
export const API_URL = "http://192.168.106.42:8000";

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

// export const capacitorHTTPClient = async (url, req_params, sendingMedia) => {
//     const result = await Storage.get({ key: 'access_token' });

//     if (result.value != null) {
//         return CapacitorHttp.request({
//             url: API_URL + url,
//             ...req_params,
//             headers: {
//                 Authorization: `Bearer ${result.value}`,
//                 'Content-Type': (sendingMedia) ? "multipart/form-data" : 'application/json'
//             }
//         });
//     } else {
//         return <Navigate to="/logout" />
//     }
// }

/*
export const requestAxios = async (url, params, sendingMedia) => {
    let instance = axios.create({
        baseURL: API_URL,
        headers: {
            "Content-Type": (sendingMedia) ? "multipart/form-data" : 'application/json'
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
*/