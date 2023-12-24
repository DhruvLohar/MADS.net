import { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import Button from "../components/utils/Button";
import { COLORS, TYPOGRAPHY } from "../constants/theme";
import useGeoLocation from "../components/services/useGeoLocation";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 20
    }
});

const Student = () => {
    const [location, refreshLocation] = useGeoLocation();

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Mark my Attendance" onClick={refreshLocation} />

            <Text style={{ marginTop: 20}}>Accuracy : {location?.coords.accuracy}</Text>
            <Text style={{ marginTop: 10}}>Latitude : {location?.coords.latitude}</Text>
            <Text style={{ marginTop: 10}}>Longitude : {location?.coords.longitude}</Text>
        </SafeAreaView>
    )
}

export default Student;