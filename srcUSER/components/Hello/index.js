import React from 'react';
import { View, Text } from 'react-native';
import classes from './helloCSS';

const Hello = () => {
  return (
    <View style={classes.wrap}>
      <Text>hello</Text>
    </View>
  );
};

export default Hello;
