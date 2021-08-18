import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';
import classes from './profileCSS';

const Profile = () => {
  return (
    <View style={classes.wrap}>
      <Header title="ПРОФИЛЬ" />
      <View></View>
    </View>
  );
};

export default Profile;
