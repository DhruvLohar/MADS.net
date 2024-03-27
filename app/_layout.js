import axios from "axios"

import { Stack, SplashScreen } from "expo-router";
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useEffect } from "react";
import { API_URL, AuthProvider } from "../context/Auth";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }

        axios.defaults.baseURL = API_URL
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <AuthProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </AuthProvider>
    )
}

export default Layout;