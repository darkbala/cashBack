import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Header';
import classes from './moreCSS';

const MoreCatalog = () => {
  return (
    <View style={classes.wrap}>
      <Header title="БАЛАНС" icon="coin" sum="400.00" />
      <View></View>
    </View>
  );
};

export default MoreCatalog;
