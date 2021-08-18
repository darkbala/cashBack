import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';
import classes from './qrCSS';

const QRcode = () => {
  return (
    <View style={classes.wrap}>
      <Header title="QR-CODE" />
      <View></View>
    </View>
  );
};

export default QRcode;
