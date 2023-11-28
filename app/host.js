import { useEffect, useState } from "react";
// AndroidPermission
import { SafeAreaView, Text, StyleSheet, Platform } from "react-native";

import Button from "../components/utils/Button";
import { COLORS, TYPOGRAPHY } from "../constants/theme";

// import BleManager from "react-native-ble-manager";
// import { BleManager } from "react-native-ble-plx";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 20
    }
});

const Host = () => {

    // const { scannedDevices, scanning, startScan, stopScan } = useBLEModule();
    const [bleManager, setBleManager] = useState(null);

    // const requestPermissions = async () => {
    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.BLUETOOTH,
    //       {
    //         title: "Bluetooth Permission",
    //         message: "This app requires Bluetooth permission.",
    //         buttonPositive: "OK",
    //       }
    //     );
    //     return granted === PermissionsAndroid.RESULTS.GRANTED;
    //   };

    // useEffect(() => {
    //     requestPermissions().then(res => {
    //         console.log(res)
    //     })
    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Start Scan" />

            <Text style={{ marginTop: 20 }}>BLE Enabled : false</Text>
            <Text style={{ marginTop: 10 }}>RSSI : null</Text>
        </SafeAreaView>
    )
}

export default Host;