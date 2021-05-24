import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';

import {Container, Content, Text, Thumbnail} from 'native-base';
import {
  _black,
  _gray,
  _LargeFont,
  _Micro1Font,
  _red,
  _RegularFont,
  _SmallFont,
  _Title1Font,
  _Title3Font,
} from '../../utils/theme';
import _Text from '../../components/_Text';
import _LinkText from '../../components/_LinkText';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {_screenHeight, _screenWidth} from '../../utils/dimensions';
import _Button from '../../components/_Button';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'native-base';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {
  _infoForCovid19,
  _infoForGuests,
  _infoForHosts,
  _infoMore,
  _liveAnywhere,
  _locationTime,
} from '../../../assets/data/dataset';
import {set} from 'react-native-reanimated';

export default function Explore() {
  function renderLocationTime({item}) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // marginHorizontal: RFValue(10),
          paddingLeft: RFValue(20),
          paddingBottom: RFValue(20),
          width: _screenWidth * 0.6,
        }}
      >
        <Image
          source={require('../../../assets/images/thumbnail1.jpeg')}
          style={{
            width: RFValue(63),
            height: RFValue(63),
            borderRadius: RFValue(70) / 5,
          }}
        />
        <View style={{padding: RFValue(5)}}>
          <Text
            style={{
              ..._LargeFont,
              paddingBottom: RFValue(3),
              fontSize: RFValue(14),
            }}
          >
            {item.location}
          </Text>
          <Text style={{..._SmallFont, fontSize: RFValue(12)}}>
            {item.time} drive
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  function renderLiveAnywhere() {
    return (
      <TouchableOpacity
        style={{
          // marginHorizontal: RFValue(10),
          paddingHorizontal: RFValue(20),
          // width: _screenWidth * 0.6,
        }}
      >
        <Image
          source={require('../../../assets/images/thumbnail3.jpg')}
          style={{
            width: RFValue(250),
            height: RFValue(250),
            borderRadius: RFValue(70) / 4.5,
          }}
        />
        <View style={{padding: RFValue(5)}}>
          <Text
            style={{
              ..._LargeFont,
              paddingBottom: RFValue(3),
              fontSize: RFValue(11.5),
              paddingVertical: RFValue(5),
            }}
          >
            Entire homes
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  function renderHostsAirbnb() {
    return (
      <TouchableOpacity
        style={{
          // marginHorizontal: RFValue(10),
          paddingLeft: RFValue(20),
          // width: _screenWidth * 0.6,
        }}
      >
        <Image
          source={require('../../../assets/images/thumbnail3.jpg')}
          style={{
            width: RFValue(250),
            height: RFValue(250),
            borderRadius: RFValue(70) / 4.5,
          }}
        />
        <View style={{padding: RFValue(5)}}>
          <Text
            style={{
              ..._LargeFont,
              paddingBottom: RFValue(3),
              fontSize: RFValue(11.5),
              paddingVertical: RFValue(5),
            }}
          >
            Entire homes
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  function renderOnlineExperience() {
    return (
      <TouchableOpacity
        style={{
          // marginHorizontal: RFValue(10),
          paddingLeft: RFValue(20),
          // width: RFValue(250),
          flexWrap: 'wrap',
        }}
      >
        <Image
          source={require('../../../assets/images/thumbnail5.jpg')}
          style={{
            width: RFValue(250),
            height: RFValue(250),
            borderTopLeftRadius: RFValue(70) / 4.5,
            borderTopRightRadius: RFValue(70) / 4.5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: RFValue(10),
            backgroundColor: '#FFFFFF20',
            // backgroundColor: '#00000090',
            borderBottomLeftRadius: RFValue(70) / 4.5,
            borderBottomRightRadius: RFValue(70) / 4.5,
          }}
        >
          <Text
            style={{
              ..._LargeFont,
              paddingBottom: RFValue(3),
              fontSize: RFValue(15),
              paddingVertical: RFValue(5),
              color: '#fff',
              // flexShrink: 1,
              width: 0,
              flexGrow: 1,
              flex: 1,
            }}
          >
            Make handmade pasta with italian grandmas
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  function headerLiveAnyWhere() {
    return (
      <View style={{padding: RFValue(20)}}>
        <Text style={{..._LargeFont}}>Live Anywhere</Text>
      </View>
    );
  }
  function headerHostsAibnb() {
    return (
      <View style={{padding: RFValue(20)}}>
        <Text
          style={{..._LargeFont, fontFamily: 'AirbnbCerealBold', color: '#000'}}
        >
          Join millions of hosts on Airbnb
        </Text>
      </View>
    );
  }
  function headerStayInformed() {
    return (
      <View style={{padding: RFValue(20)}}>
        <Text
          style={{..._LargeFont, fontFamily: 'AirbnbCerealBold', color: '#000'}}
        >
          Stay informed
        </Text>
      </View>
    );
  }
  function headerOnlineExperience() {
    return (
      <View style={{padding: RFValue(20)}}>
        <Text
          style={{
            ..._LargeFont,
            color: '#fff',
            fontFamily: 'AirbnbCerealExtraBold',
            paddingBottom: RFValue(6),
          }}
        >
          Online Experiences
        </Text>
        <Text style={{..._SmallFont, color: '#fff'}}>
          Interactive activities you can do together, led by expert hosts.
        </Text>
      </View>
    );
  }
  function bottomOnlineExperience() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: RFValue(5),
          width: _screenWidth * 0.2,
          padding: RFValue(5),
          marginTop: RFValue(30),
          marginLeft: RFValue(20),
          alignItems: 'center',
        }}
      >
        <Text style={{..._Micro1Font, color: '#fff', fontSize: RFValue(12)}}>
          Explore all
        </Text>
      </TouchableOpacity>
    );
  }
  function infoForGuests() {
    return (
      <View style={{paddingLeft: RFValue(20)}}>
        <View style={{paddingVertical: RFValue(15)}}>
          <Text style={{..._RegularFont, color: '#000', fontSize: RFValue(15)}}>
            For Guests
          </Text>
        </View>
        {_infoForGuests.map((info, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={{
              paddingVertical: RFValue(15),
              borderTopWidth: 1,
              borderTopColor: '#ccc',
            }}
          >
            <Text
              style={{
                ..._SmallFont,
                fontFamily: 'AirbnbCerealMedium',
                fontSize: RFValue(13),
                color: '#000',
              }}
            >
              {info.title}
            </Text>
            <Text style={{..._SmallFont, fontSize: RFValue(12)}}>
              {info.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  function infoForHosts() {
    return (
      <View style={{paddingLeft: RFValue(20)}}>
        <View style={{paddingVertical: RFValue(15)}}>
          <Text style={{..._RegularFont, color: '#000', fontSize: RFValue(15)}}>
            For Hosts
          </Text>
        </View>
        {_infoForHosts.map((info, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={{
              paddingVertical: RFValue(15),
              borderTopWidth: 1,
              borderTopColor: '#ccc',
            }}
          >
            <Text
              style={{
                ..._SmallFont,
                fontFamily: 'AirbnbCerealMedium',
                fontSize: RFValue(13),
                color: '#000',
              }}
            >
              {info.title}
            </Text>
            <Text style={{..._SmallFont, fontSize: RFValue(12)}}>
              {info.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  function infoForCovid19() {
    return (
      <View style={{paddingLeft: RFValue(20)}}>
        <View style={{paddingVertical: RFValue(15)}}>
          <Text style={{..._RegularFont, color: '#000', fontSize: RFValue(15)}}>
            For COVID-19 response
          </Text>
        </View>
        {_infoForCovid19.map((info, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={{
              paddingVertical: RFValue(15),
              borderTopWidth: 1,
              borderTopColor: '#ccc',
            }}
          >
            <Text
              style={{
                ..._SmallFont,
                fontFamily: 'AirbnbCerealMedium',
                fontSize: RFValue(13),
                color: '#000',
              }}
            >
              {info.title}
            </Text>
            <Text style={{..._SmallFont, fontSize: RFValue(12)}}>
              {info.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  function infoMore() {
    return (
      <View style={{paddingLeft: RFValue(20)}}>
        <View style={{paddingVertical: RFValue(15)}}>
          <Text style={{..._RegularFont, color: '#000', fontSize: RFValue(15)}}>
            More
          </Text>
        </View>
        {_infoMore.map((info, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={{
              paddingVertical: RFValue(15),
              borderTopWidth: 1,
              borderTopColor: '#ccc',
            }}
          >
            <Text
              style={{
                ..._SmallFont,
                fontFamily: 'AirbnbCerealMedium',
                fontSize: RFValue(13),
                color: '#000',
              }}
            >
              {info.title}
            </Text>
            <Text style={{..._SmallFont, fontSize: RFValue(12)}}>
              {info.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  const infoRenderList = [
    infoForGuests(),
    infoForHosts(),
    infoForCovid19(),
    infoMore(),
  ];

  const [scrollY, setScrollY] = useState(0);

  // let scrollY = new Animated.Value(0);
  function getScrollValue(event) {
    setScrollY(Math.ceil(event.nativeEvent.contentOffset.y));
  }
  // const animatedIHbg = scrollY.interpolate({
  //   inputRange: [0, 44],
  //   outputRange: [0, 1],
  //   extrapolate: 'clamp',
  // });

  return (
    <>
      <Container style={styles.container}>
        <StatusBar
          barStyle={scrollY >= 48 ? 'dark-content' : 'light-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Animated.ScrollView
          onScroll={(event) => getScrollValue(event)}
          // onMomentumScrollEnd={(event) => getScrollValue(event)}
          scrollEventThrottle={16}
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          {/*Covid response link*/}
          <Pressable style={{alignItems: 'center', paddingTop: RFValue(25)}}>
            <Text
              style={{
                ..._RegularFont,
                color: '#fff',
                fontSize: RFValue(12),
                textDecorationLine: 'underline',
                fontFamily: 'AirbnbCerealMedium',
              }}
            >
              Get the latest on our COVID-19 response
            </Text>
          </Pressable>
          <ImageBackground
            imageStyle={styles.imageStyle}
            source={require('../../../assets/images/wallpaper.jpg')}
            style={styles.imageBackground}
          >
            {/*SearchBar*/}
            <Animated.View
            // style={{position: scrollY >= 44 ? 'absolute' : 'relative'}}
            >
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  padding: RFValue(7),
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginTop: RFValue(20),
                }}
                activeOpacity={0.9}
                onPress={() => {}}
              >
                <Icon
                  name={'search'}
                  style={{color: _red, paddingRight: RFValue(5)}}
                />
                <Text
                  style={{
                    fontSize: RFValue(13),
                    color: '#000',
                    fontFamily: 'AirbnbCerealMedium',
                  }}
                >
                  Where are you going?
                </Text>
              </TouchableOpacity>
            </Animated.View>
            {/*Welcome Hero*/}
            <View style={styles.heroContainer}>
              <Text
                style={{
                  ..._Title1Font,
                  padding: 0,
                  margin: 0,
                  height: RFValue(65),
                  fontSize: RFValue(60),
                  color: '#fff',
                }}
              >
                Go
              </Text>
              <Text
                style={{
                  ..._Title1Font,
                  padding: 0,
                  margin: 0,
                  lineHeight: RFValue(58),
                  fontSize: RFValue(60),
                  color: '#fff',
                }}
              >
                Near
              </Text>
              {/*Explore nearby button*/}
              <Pressable
                style={{
                  marginVertical: RFValue(10),
                  backgroundColor: '#fff',
                  width: RFValue(150),
                  alignItems: 'center',
                  borderRadius: RFValue(5),
                  paddingVertical: RFValue(5),
                  paddingHorizontal: RFValue(10),
                }}
              >
                <Text style={{..._Micro1Font, fontSize: RFValue(11)}}>
                  Explore nearby stays
                </Text>
              </Pressable>
            </View>
          </ImageBackground>
          {/*Location Slider*/}
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: RFValue(20),
              flex: 1,
            }}
          >
            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              // contentContainerStyle={{paddingVertical: 20}}
              style={{marginTop: RFValue(20)}}
              snapToInterval={_screenWidth * 0.6}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              bounces={false}
              bouncesZoom={false}
            >
              <FlatList
                data={_locationTime}
                scrollEnabled={false}
                contentContainerStyle={{
                  alignSelf: 'flex-start',
                }}
                numColumns={Math.ceil(_locationTime.length / 2)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={(item, index) => renderLocationTime(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
            <View style={{marginBottom: RFValue(30)}}>
              {headerLiveAnyWhere()}
              <FlatList
                data={_liveAnywhere}
                horizontal={true}
                snapToInterval={RFValue(290)}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                bounces={false}
                bouncesZoom={false}
                showsHorizontalScrollIndicator={false}
                renderItem={(item, index) => renderLiveAnywhere()}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
          {/*Online Experience Slider*/}
          <View
            style={{
              backgroundColor: '#000',
              paddingVertical: RFValue(20),
              flex: 1,
            }}
          >
            <View style={{marginBottom: RFValue(30)}}>
              {headerOnlineExperience()}
              <FlatList
                data={_liveAnywhere}
                horizontal={true}
                snapToInterval={RFValue(270)}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                bounces={false}
                bouncesZoom={false}
                showsHorizontalScrollIndicator={false}
                renderItem={(item, index) => renderOnlineExperience()}
                keyExtractor={(item, index) => index.toString()}
                style={{flex: 1}}
              />
              {bottomOnlineExperience()}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: RFValue(20),
              flex: 1,
            }}
          >
            <View style={{marginBottom: RFValue(30)}}>
              {headerHostsAibnb()}
              <FlatList
                data={_liveAnywhere}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(item, index) => renderHostsAirbnb()}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{paddingRight: RFValue(20)}}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#eee',
              paddingVertical: RFValue(20),
              flex: 1,
            }}
          >
            <View style={{marginBottom: RFValue(30)}}>
              {headerStayInformed()}
              <ScrollView
                snapToInterval={_screenWidth * 0.7}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                bounces={false}
                bouncesZoom={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {infoRenderList.map((info, index) => (
                  <View
                    key={index.toString()}
                    style={{
                      width:
                        index + 1 === infoRenderList.length
                          ? _screenWidth
                          : _screenWidth * 0.7,
                    }}
                  >
                    {info}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Animated.ScrollView>
        {/*Final top header*/}
      </Container>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: '#fff',
          paddingTop: RFValue(20),
          display: 'none',
          elevation: scrollY >= 48 ? 2 : 0,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            justifyContent: 'center',
            padding: RFValue(7),
            // borderRadius: 50,
            // marginHorizontal: 20,
            // marginTop: RFValue(10),
          }}
          activeOpacity={0.9}
          onPress={() => {}}
        >
          <Icon
            name={'search'}
            style={{color: _red, paddingRight: RFValue(5)}}
          />
          <Text
            style={{
              fontSize: RFValue(13),
              color: '#000',
              fontFamily: 'AirbnbCerealMedium',
            }}
          >
            Where are you going?
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: RFValue(30),
    backgroundColor: '#000',
    flex: 1,
    elevation: 1,
  },
  content: {
    // marginTop: RFValue(17),
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: _screenHeight * 0.57,
    resizeMode: 'cover',
    marginTop: RFValue(10),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // overflow: 'hidden',
  },
  imageStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  heroContainer: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    marginBottom: RFValue(150),
  },
});
