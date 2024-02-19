import React from 'react';
import {Canvas, Blur, RoundedRect, useImage} from '@shopify/react-native-skia';
import {Text, View} from 'react-native';

const BlurImageFilter = () => {
  return (
    <Canvas style={{width: 158, height: 158}}>
      <RoundedRect
        x={0}
        y={0}
        width={256}
        height={256}
        r={25}
        color="lightblue"
      />
      <Blur blur={4} />
    </Canvas>
  );
};

export default BlurImageFilter;
