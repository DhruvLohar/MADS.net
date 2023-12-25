import * as React from 'react';

import { ExpoBleManagerViewProps } from './ExpoBleManager.types';

export default function ExpoBleManagerView(props: ExpoBleManagerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
