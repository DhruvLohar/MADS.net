import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoBleManager.web.ts
// and on native platforms to ExpoBleManager.ts
import ExpoBleManagerModule from './src/ExpoBleManagerModule';
import ExpoBleManagerView from './src/ExpoBleManagerView';
import { ChangeEventPayload, ExpoBleManagerViewProps } from './src/ExpoBleManager.types';

// Get the native constant value.
export const PI = ExpoBleManagerModule.PI;

export function hello(): string {
  return ExpoBleManagerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoBleManagerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoBleManagerModule ?? NativeModulesProxy.ExpoBleManager);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoBleManagerView, ExpoBleManagerViewProps, ChangeEventPayload };
