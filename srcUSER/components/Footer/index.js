import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import classes from './footerCSS';
import IMGcatalog from '../../../assets/cashImages/shop.svg';
import IMGbalance from '../../../assets/cashImages/balance.svg';
import IMGqr from '../../../assets/cashImages/qr.svg';
import IMGprofile from '../../../assets/cashImages/profile.svg';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);

  const catalog = () => {
    navigation.navigate('Catalog');
    setIndex(0);
  };
  const balance = () => {
    navigation.navigate('Balance');
    setIndex(1);
  };
  const qr = () => {
    navigation.navigate('QR');
    setIndex(2);
  };
  const profile = () => {
    navigation.navigate('Profile');
    setIndex(3);
  };

  return (
    <View style={classes.wrap}>
      <TouchableOpacity onPress={catalog}>
        {index == 0 ? (
          <IMGcatalog width={50} height={50} />
        ) : (
          <IMGcatalog opacity={0.3} width={50} height={50} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={balance}>
        {index == 1 ? (
          <IMGbalance width={50} height={50} />
        ) : (
          <IMGbalance opacity={0.3} width={50} height={50} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={qr}>
        {index == 2 ? (
          <IMGqr width={50} height={50} />
        ) : (
          <IMGqr opacity={0.3} width={50} height={50} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={profile}>
        {index == 3 ? (
          <IMGprofile width={50} height={50} />
        ) : (
          <IMGprofile opacity={0.3} width={50} height={50} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
