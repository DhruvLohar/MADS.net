package expo.modules.blemanager

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import android.Manifest
import android.app.Activity
import android.os.ParcelUuid
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import android.bluetooth.BluetoothAdapter
import android.bluetooth.le.AdvertiseCallback
import android.bluetooth.le.AdvertiseSettings
import android.bluetooth.le.BluetoothLeAdvertiser
import android.bluetooth.le.AdvertiseData

class ExpoBleManagerModule : Module() {

  private var bluetoothLeAdvertiser: BluetoothLeAdvertiser? = null

  override fun definition() = ModuleDefinition {
    Name("ExpoBleManager")

    Function("hello") {
      "Hello world! 👋 Changed even more"
    }

    Function("startAdvertising") {
      val activity = appContext.activityProvider?.currentActivity
      val applicationContext = activity?.applicationContext
      if (applicationContext != null) {
        // Check if Bluetooth is supported
        val bluetoothAdapter = BluetoothAdapter.getDefaultAdapter()
        if ( bluetoothAdapter == null || !bluetoothAdapter.isEnabled() ) {
          // Bluetooth not supported or not enabled
          return@Function "Bluetooth not supported or not enabled"
        }

        // Check if BLE advertiser is available
        bluetoothLeAdvertiser = bluetoothAdapter.bluetoothLeAdvertiser
        if ( bluetoothLeAdvertiser == null ) {
          // BLE advertising not supported
          return@Function "BLE advertising not supported"
        }

        // Define your advertising settings and data
        val settings = AdvertiseSettings.Builder()
          .setAdvertiseMode(AdvertiseSettings.ADVERTISE_MODE_LOW_LATENCY)
          .setTxPowerLevel(AdvertiseSettings.ADVERTISE_TX_POWER_HIGH)
          .setConnectable(true)
          .build()

        val serviceUUID = ParcelUuid.fromString("0c287abd-eb75-4dd3-afc6-b3f3368307fa")
        val data = AdvertiseData.Builder()
          // Add your advertisement data here
          .addServiceUuid(serviceUUID)
          .setIncludeDeviceName(false)
          .build()

        // Start BLE advertising
        bluetoothLeAdvertiser?.startAdvertising(settings, data, object : AdvertiseCallback() {
          override fun onStartSuccess(settingsInEffect: AdvertiseSettings?) {
            super.onStartSuccess(settingsInEffect)
            // Advertising started successfully
          }

          override fun onStartFailure(errorCode: Int) {
            super.onStartFailure(errorCode)
            // Handle advertising start failure
          }
        })

        return@Function "Started BLE advertising"
      }

      return@Function "Something Went Wrong"
    }

    Function("stopAdvertising") {
      val activity = appContext.activityProvider?.currentActivity
      val applicationContext = activity?.applicationContext

      if (applicationContext != null) {
        if (bluetoothLeAdvertiser != null) {
          bluetoothLeAdvertiser?.stopAdvertising(object : AdvertiseCallback() {
            // Implement necessary callbacks if required
          })
          return@Function "Stopped BLE advertising"
        }
        return@Function "No ongoing advertising"
      }

      return@Function "Something Went Wrong"
    }
  }
}
