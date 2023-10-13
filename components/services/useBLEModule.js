import { useEffect, useState } from "react";
import { BleManager, State as BleState } from "react-native-ble-plx";
import { PermissionsAndroid } from "react-native";
import * as ExpoDevice from "expo-device";

const useBLEModule = () => {
  const [bleManager, setBLEManager] = useState(null);
  const [scannedDevices, setScannedDevices] = useState([]);
  const [scanning, setScanning] = useState(false);

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
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
      fineLocationPermission === "granted"
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
    const initializeBLEManager = async () => {
      // const status = await requestPermissions();

      // if (status) {
      //   const manager = new BleManager();
      //   console.log(manager)
      //   setBLEManager(manager);
      // }
    };

    initializeBLEManager();
  }, []);

  const startScan = () => {
    if (!bleManager) {
      console.log("BLE manager is not initialized.");
      return;
    }

    if (scanning) {
      console.log("Already scanning...");
      return;
    }

    setScanning(true);
    setScannedDevices([]);

    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error("Error while scanning:", error);
        return;
      }

      if (device) {
        setScannedDevices((prevDevices) => {
          if (!prevDevices.some((prevDevice) => prevDevice.id === device.id)) {
            return [...prevDevices, device];
          }
          return prevDevices;
        });
      }
    });
  };

  const stopScan = () => {
    if (bleManager && scanning) {
      bleManager.stopDeviceScan();
      setScanning(false);
    }
  };

  return {
    requestPermissions
  };
};

export default useBLEModule;
