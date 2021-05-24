import React from 'react';
import {StyleSheet, View} from 'react-native';
import {_black, _RegularFont} from '../utils/theme';
// import {Text} from 'react-native';
import {Text} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';

export default function _Text({
  children,
  type = {},
  styles = {},
  color = _black,
  fontSize = RFValue(17),
  fontFamily,
  ...props
}) {
  return (
    <Text
      {...props}
      style={{
        ..._RegularFont,
        fontSize: RFValue(fontSize),
        ...type,
        color: color,
        ...styles,
        fontFamily: fontFamily,
      }}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
