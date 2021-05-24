import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import {Container, Content} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  _Title2Font,
  BOLD,
  _black,
  _Title3Font,
  MEDIUM,
  _Micro1Font,
  LIGHT,
  BOOK,
  _SmallFont,
  _gray,
  _LargeFont,
} from '../../utils/theme';
import {_screenWidth} from '../../utils/dimensions';
import SavedItem from '../../components/SavedItem';

export default function Saved() {
  return (
    <Container>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Content style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: RFValue(20)}}>
          <Text style={{..._Title2Font, color: '#000', fontFamily: MEDIUM}}>
            Saved
          </Text>
        </View>
        {/* Saved item */}
        <SavedItem />
        <SavedItem />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  content: {paddingTop: RFValue(40)},
});
