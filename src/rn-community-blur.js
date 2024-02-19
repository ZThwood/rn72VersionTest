import React from 'react';
import {Canvas, Blur, useImage} from '@shopify/react-native-skia';
import {View, Text, Image} from 'react-native';

const RNCommunityBlur = () => {
  const image = require('../assets/cat.jpg');

  // if (!image) {
  // return (
  //   <View>
  //     <Text>'BlurImageFilter</Text>
  //   </View>
  // );

  return (
    <Image
      // style={styles.tinyLogo}
      source={image}
    />
  );
  // }
};

export default RNCommunityBlur;
