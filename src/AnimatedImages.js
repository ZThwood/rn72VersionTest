import React from 'react';

import {Canvas, Image, useAnimatedImageValue} from '@shopify/react-native-skia';
export const AnimatedImages = () => {
  // This can be an animated GIF or WebP file
  const bird = useAnimatedImageValue(require('./bird.gif'));
  return (
    <Canvas
      style={{
        width: 320,
        height: 180,
      }}>
      <Image image={bird} x={0} y={0} width={320} height={180} fit="contain" />
    </Canvas>
  );
};
