import { useEffect, useState, useMemo } from "react";
import { SafeAreaView, Text, StyleSheet, Platform, PermissionsAndroid, ScrollView, View } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";

import * as ExpoDevice from 'expo-device';

import Button from "../components/utils/Button";
import { COLORS, TYPOGRAPHY } from "../constants/theme";
import { startAdvertising, stopAdvertising } from "../modules/expo-ble-manager";


// import useBLEModule from "../components/services/useBLEModule";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 20,
        paddingTop: 100
    }
});

const Host = () => {

    // const [ scannedDevices, scanning, startScan, stopScan ] = useBLEModule();
    // const bleManager = useMemo(() => new BleManager(), []);
    const manager = new BleManager();
    const [scannedDevices, setScannedDevices] = useState([]);
    const [scanning, setScanning] = useState(false);

    const requestAndroid31Permissions = async () => {
        const bluetoothScanPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title: "Bluetooth Scan Permission",
                message: "To scan the teacher's device",
                buttonPositive: "OK",
            }
        );
        const bluetoothConnectPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
                title: "Bluetooth Connect Permission",
                message: "To Connect to the teacher's device",
                buttonPositive: "OK",
            }
        );
        const bluetoothAdvertisePermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
            {
                title: "Bluetooth Advertise Permissions",
                message: "Needs BLE Advertise Perms",
                buttonPositive: "OK",
            }
        );
        const fineLocationPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message: "Bluetooth Low Energy requires Location",
                buttonPositive: "OK",
            }
        );

        return (
            bluetoothScanPermission === "granted" &&
            bluetoothConnectPermission === "granted" &&
            fineLocationPermission === "granted" &&
            bluetoothAdvertisePermission === "granted"
        );
    };

    const requestPermissions = async () => {
        if (Platform.OS === "android") {
            if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "Bluetooth Low Energy requires Location",
                        buttonPositive: "OK",
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                const isAndroid31PermissionsGranted = await requestAndroid31Permissions();

                return isAndroid31PermissionsGranted;
            }
        } else {
            return true;
        }
    };

    useEffect(() => {
        (async () => {
            await requestPermissions();
        })();
    }, [])

    const reqperm = async () => {
        await requestPermissions();
    }

    const startScan = () => {
        if (!manager) {
            console.log("BLE manager is not initialized.");
            return;
        }

        if (scanning) {
            console.log("Already scanning...");
            return;
        }

        setScanning(true);

        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // console.error("Error while scanning:", error);
                return;
            }

            if (device?.serviceUUIDs?.includes("0c287abd-eb75-4dd3-afc6-b3f3368307fa")) {
                setScannedDevices(device);
                manager.stopDeviceScan();

                manager.connectToDevice(scannedDevices.id)
                .then(async (connectedDev) => {
                    console.log(connectedDev.serviceData, connectedDev.serviceUUIDs)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        });
    }

    const stopScan = () => {
        if (manager && scanning) {
            manager.stopDeviceScan();
            setScanning(false);
            setScannedDevices([])
        }
    }

    const starta = () => {
        try {
            const res = startAdvertising();
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    const stopa = () => {
        try {
            const res = stopAdvertising();
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Button title="Start Scan" onPress={() => startScan()} />
                <Button title="Stop Scan" onPress={() => stopScan()} />

                <View>
                    <Text style={{ marginTop: 10 }}>ID : {scannedDevices.id}</Text>
                    <Text style={{ marginTop: 5 }}>NAME : {scannedDevices.name}</Text>
                    <Text style={{ marginTop: 5 }}>RSSI : {scannedDevices.rssi}</Text>
                    <Text style={{ marginTop: 5 }}>service uuid : {JSON.stringify(scannedDevices.serviceUUIDs)}</Text>
                    <Text style={{ marginTop: 5 }}>service data : {JSON.stringify(scannedDevices.serviceData)}</Text>
                </View>
                {/* {scannedDevices.map((device, idx) => (
                ))} */}

                <Button title="Request Permissions" onPress={() => reqperm()} />
                <Button title="Start Advertising" onPress={() => starta()} />
                <Button title="Stop Advertising" onPress={() => stopa()} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Host;