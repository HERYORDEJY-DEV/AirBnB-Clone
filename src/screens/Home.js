import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Pressable} from 'react-native';
import {
  _LargeFont,
  _Micro1Font,
  _orange,
  _RegularFont,
  _SmallFont,
  _Title1Font,
  _Title2Font,
  _Title3Font,
  _red,
  _green,
  _black,
  _gray,
} from '../utils/theme';
import {Container, Content, Text, View, Thumbnail} from 'native-base';

const Home = () => {
  return (
    <Container style={{flex: 1, alignItems: 'center', marginTop: 30}}>
      <Content>
        <Text style={{..._Title1Font, color: _orange}} numberOfLines={1}>
          Home Screen1 Home Screen1 Home Screen1
        </Text>
        <Text numberOfLines={1} style={{..._Title2Font, color: _red}}>
          Home Screen
        </Text>
        <Text
          style={{
            ..._Title3Font,
            color: _black,
          }}>
          Home Screen
        </Text>
        <Text style={{..._LargeFont, color: _orange}}>Home Screen</Text>
        <Text style={{..._RegularFont, color: _orange}}>Home Screen</Text>
        <Text style={{..._SmallFont, color: _orange}}>Home Screen</Text>
        <Text style={{..._Micro1Font, color: _orange}}>Home Screen</Text>
        <View>
          <Image
            source={require('../../assets/images/thumbnail5.jpg')}
            style={{width: '20%', height: 40, flex: 0.5}}
            resizeMode={'contain'}
            blurRadius={0.5}
          />
        </View>

        <Thumbnail
          circular={false}
          source={require('../../assets/images/thumbnail1.jpeg')}
          // resizeMode={'contain'}
        />
        <Pressable onPress={() => console.warn('Yusuf')}>
          <Text>Yusuf</Text>
        </Pressable>
      </Content>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
