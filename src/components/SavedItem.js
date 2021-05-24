import React from 'react';
import {View, Text, Image} from 'react-native';
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
} from '../utils/theme';
import {_screenWidth} from '../utils/dimensions';

export default function SavedItem() {
  return (
    <View style={{margin: RFValue(20)}}>
      {/* Images container */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: RFValue(150),
          borderRadius: RFValue(10),
        }}
      >
        {/* Left image container */}
        <View
          style={{
            flex: 2,
          }}
        >
          <Image
            source={require('../../assets/images/thumbnail6.jpg')}
            style={{
              resizeMode: 'cover',
              width: null,
              height: null,
              flex: 1,
              borderTopLeftRadius: RFValue(10),
              marginRight: RFValue(1),
            }}
          />
        </View>
        {/* Right images container */}
        <View style={{flex: 1, paddingLeft: RFValue(1)}}>
          <Image
            source={require('../../assets/images/thumbnail5.jpg')}
            style={{
              resizeMode: 'cover',
              width: null,
              height: null,
              flex: 1,
              marginBottom: RFValue(1),
              borderTopRightRadius: RFValue(10),
            }}
          />
          <Image
            source={require('../../assets/images/thumbnail4.jpg')}
            style={{
              resizeMode: 'cover',
              width: null,
              height: null,
              flex: 1,
              marginTop: RFValue(1),
            }}
          />
        </View>
      </View>
      {/* Footer text container */}
      <View
        style={{
          alignItems: 'flex-start',
          padding: RFValue(20),
          borderWidth: RFValue(1),
          borderTopWidth: 0,
          borderColor: _gray,
          borderBottomLeftRadius: RFValue(10),
          borderBottomRightRadius: RFValue(10),
        }}
      >
        <Text
          style={{
            ..._Micro1Font,
            fontSize: RFValue(11),
            fontFamily: BOOK,
            color: _gray,
          }}
        >
          Any time
        </Text>
        <Text
          style={{
            ..._LargeFont,
            fontFamily: MEDIUM,
            paddingBottom: RFValue(5),
          }}
        >
          Osogbo
        </Text>
        <Text style={{..._Micro1Font, fontSize: RFValue(11), fontFamily: BOOK}}>
          1 stay
        </Text>
      </View>
    </View>
  );
}
