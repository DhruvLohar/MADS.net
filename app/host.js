import { useEffect, useState, useMemo } from "react";
// AndroidPermission
import { SafeAreaView, Text, StyleSheet, Platform } from "react-native";

import Button from "../components/utils/Button";
import { COLORS, TYPOGRAPHY } from "../constants/theme";

import { PermissionsAndroid } from "react-native";
import { BleManager } from "react-native-ble-plx";
// import useBLEModule from "../components/services/useBLEModule";


import { hello } from "../modules/expo-ble-manager";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 20
    }
});

// export async function requestLocationPermission() {
//     try {
//         if (Platform.OS === 'android') {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: 'BLE Avertiser Example App',
//                     message: 'Example App access to your location ',
//                 },
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log('[Permissions]', 'Location Permission granted');
//             } else {
//                 console.log('[Permissions]', 'Location Permission denied');
//             }
//         }

//         const blueoothActive = await BLEAdvertiser.getAdapterState()
//             .then((result) => {
//                 console.log('[Bluetooth]', 'Bluetooth Status', result);
//                 return result === 'STATE_ON';
//             })
//             .catch((error) => {
//                 console.log('[Bluetooth]', 'Bluetooth Not Enabled');
//                 return false;
//             });

//         if (!blueoothActive) {
//             await Alert.alert(
//                 'Example requires bluetooth to be enabled',
//                 'Would you like to enable Bluetooth?',
//                 [
//                     {
//                         text: 'Yes',
//                         onPress: () => BLEAdvertiser.enableAdapter(),
//                     },
//                     {
//                         text: 'No',
//                         onPress: () => console.log('Do Not Enable Bluetooth Pressed'),
//                         style: 'cancel',
//                     },
//                 ],
//             );
//         }
//     } catch (err) {
//         console.warn(err);
//     }
// }

const Host = () => {

    // const [ scannedDevices, scanning, startScan, stopScan ] = useBLEModule();
    // const bleManager = useMemo(() => new BleManager(), []);
    const manager = new BleManager();

    // const requestAndroid31Permissions = async () => {
    //     const bluetoothScanPermission = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    //         {
    //             title: "Location Permission",
    //             message: "Bluetooth Low Energy requires Location",
    //             buttonPositive: "OK",
    //         }
    //     );
    //     const bluetoothConnectPermission = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    //         {
    //             title: "Location Permission",
    //             message: "Bluetooth Low Energy requires Location",
    //             buttonPositive: "OK",
    //         }
    //     );
    //     const fineLocationPermission = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //         {
    //             title: "Location Permission",
    //             message: "Bluetooth Low Energy requires Location",
    //             buttonPositive: "OK",
    //         }
    //     );

    //     return (
    //         bluetoothScanPermission === "granted" &&
    //         bluetoothConnectPermission === "granted" &&
    //         fineLocationPermission === "granted"
    //     );
    // };

    // const requestPermissions = async () => {
    //     if (Platform.OS === "android") {
    //         if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
    //             const granted = await PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //                 {
    //                     title: "Location Permission",
    //                     message: "Bluetooth Low Energy requires Location",
    //                     buttonPositive: "OK",
    //                 }
    //             );
    //             return granted === PermissionsAndroid.RESULTS.GRANTED;
    //         } else {
    //             const isAndroid31PermissionsGranted = await requestAndroid31Permissions();

    //             return isAndroid31PermissionsGranted;
    //         }
    //     } else {
    //         return true;
    //     }
    // };

    // useEffect(() => {
    //     (async () => {
    //         // await requestPermissions();
    //         await requestLocationPermission()
    //     })();
    // }, [])

    const startScan = () => { }

    const stopScan = () => { }

    // const startAdvertising = () => {
    //     // 31b2254f-bc21-40c6-937e-23c3fe946dd1
    //     setCompanyId(0x00)
    //     BLEAdvertiser.broadcast('31b2254f-bc21-40c6-937e-23c3fe946dd1', null, {
    //         advertiseMode: BLEAdvertiser.ADVERTISE_MODE_BALANCED,
    //         txPowerLevel: BLEAdvertiser.ADVERTISE_TX_POWER_MEDIUM,
    //         connectable: false,
    //         includeDeviceName: false,
    //         includeTxPowerLevel: false,
    //     })
    //         .then((sucess) => console.log(this.state.uuid, 'Adv Successful', sucess))
    //         .catch((error) => console.log(this.state.uuid, 'Adv Error', error));
    // }

    const stopAdvertising = () => { }

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Start Scan" />
            <Button title="Stop Scan" />

            <Text>Idhar scanned dikhega</Text>
            <Text style={{ marginTop: 20 }}>BLE Enabled : false</Text>
            <Text style={{ marginTop: 10 }}>RSSI : null</Text>

            {/* <Button title="Start Advertising" onPress={startAdvertising} /> */}
            <Button title="Stop Advertising" />

        </SafeAreaView>
    )
}

export default Host;