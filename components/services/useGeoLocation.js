import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
            return;
        }
    
        let currentPosition = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation
        });
        setLocation(currentPosition)
    }

    const refreshLocation = () => {
        getLocation();
    }

    useEffect(() => {
        getLocation();
    }, []);

    return { location, refreshLocation };
}

export default useGeoLocation;