import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../Header';
import classes from './catalogCSS';

const Catalog = () => {
  return (
    <View style={classes.wrap}>
      <Header title="КАТАЛОГ" icon="coin" sum="300.00" />
      <View></View>
    </View>
  );
};

export default Catalog;
