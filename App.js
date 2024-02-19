/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import {Canvas, Blur, RoundedRect} from '@shopify/react-native-skia';
const testCardNum = 200;
const DEFAULT_SHOW_AMOUNT = 30;

let array = [];

for (let i = 0; i < testCardNum; i++) {
  let obj = {
    id: i,
    name: 'test name ' + i,
  };
  array.push(obj);
}

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
const App = () => {
  const [showAmount, sethSowAmount] = useState(DEFAULT_SHOW_AMOUNT);

  const data = array.slice(0, showAmount);

  const LoadMoreData = () => {
    if (showAmount > array.length) {
      return;
    }
    sethSowAmount(num => {
      const result = (num += DEFAULT_SHOW_AMOUNT);
      return result;
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <BlurImageFilter />
        <Text style={{fontSize: 16, color: '#FDFDFD', marginTop: 5}}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'orange',
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: '100%',
          marginTop: 20,
          paddingBottom: 120,
          flexDirection: 'column',
        }}
        numColumns={4}
        data={data}
        renderItem={renderItem}
        onEndReached={LoadMoreData}
      />
    </SafeAreaView>
  );
};

export default App;
