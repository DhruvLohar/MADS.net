import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoBleManagerViewProps } from './ExpoBleManager.types';

const NativeView: React.ComponentType<ExpoBleManagerViewProps> =
  requireNativeViewManager('ExpoBleManager');

export default function ExpoBleManagerView(props: ExpoBleManagerViewProps) {
  return <NativeView {...props} />;
}
