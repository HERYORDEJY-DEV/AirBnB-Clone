import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import _Text from './_Text';
import {_black, _Micro1Font, _RegularFont} from '../utils/theme';
import {RFValue} from 'react-native-responsive-fontsize';

export default function _Button({
  children,
  backgroundColor,
  type,
  borderRadius,
  textStyles,
  textColor = _black,
  fontSize = RFValue(10),
  containerStyles,
  ...props
}) {
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor,
        paddingHorizontal: RFValue(9),
        paddingVertical: RFValue(5),
        borderRadius: borderRadius || 10,
        ...containerStyles,
      }}
    >
      {/*<_Text*/}
      {/*  {...props}*/}
      {/*  numberOfLines={1}*/}
      {/*  type={type}*/}
      {/*  color={textColor}*/}
      {/*  fontSize={fontSize}*/}
      {/*  children={children}*/}
      {/*  styles={{...textStyles}}*/}
      {/*/>*/}
      <Text
        {...props}
        style={{
          ..._Micro1Font,
          fontSize: RFValue(fontSize),
          ...type,
          color: textColor,
          ...styles,
          fontFamily: 'AirbnbCerealMedium',
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
