import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {_green, _SmallFont} from '../utils/theme';

export default function _LinkText({children, ...props}) {
  return (
    <Pressable {...props}>
      <Text style={{..._SmallFont, color: _green}}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
