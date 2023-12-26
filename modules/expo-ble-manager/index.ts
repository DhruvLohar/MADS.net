import ExpoBleManagerModule from './src/ExpoBleManagerModule';

export function hello(): string {
  return ExpoBleManagerModule.hello();
}

// export function requestPermissions(): boolean {
//     return ExpoBleManagerModule.requestPermissions();
// }

export function startAdvertising(): string {
    return ExpoBleManagerModule.startAdvertising();
}

export function stopAdvertising(): string {
    return ExpoBleManagerModule.stopAdvertising();
}