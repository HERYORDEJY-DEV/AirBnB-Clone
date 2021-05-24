import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/tab/Explore';
import Saved from '../screens/tab/Saved';
import Trips from '../screens/tab/Trips';
import Inbox from '../screens/tab/Inbox';
import Profile from '../screens/tab/Profile';
import {_SmallFont, _TabBarFont, _black, _gray, _red} from '../utils/theme';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName={'Explore'}
      tabBarOptions={{
        tabStyle: {},
        labelStyle: {..._TabBarFont},
        activeTintColor: _black,
        inactiveTintColor: _gray,
      }}
    >
      <BottomTab.Screen
        name={'Explore'}
        component={Explore}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ..._TabBarFont,
                color: focused ? _red : _gray,
                fontFamily: focused ? 'AirbnbCerealBold' : 'AirbnbCerealLight',
              }}
            >
              Explore
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon name={'search'} style={{color: focused ? _red : _gray}} />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Saved'}
        component={Saved}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ..._TabBarFont,
                color: focused ? _red : _gray,
                fontFamily: focused ? 'AirbnbCerealBold' : 'AirbnbCerealLight',
              }}
            >
              Saved
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={'heart-outline'}
              style={{color: focused ? _red : _gray}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Trips'}
        component={Trips}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ..._TabBarFont,
                color: focused ? _red : _gray,
                fontFamily: focused ? 'AirbnbCerealBold' : 'AirbnbCerealLight',
              }}
            >
              Trips
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={'airbnb'}
              type={'FontAwesome5'}
              style={{color: focused ? _red : _gray}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Inbox'}
        component={Inbox}
        options={{
          // tabBarBadge: () => (
          //   <Text
          //     style={{
          //       ..._TabBarFont,
          //     }}>
          //     1
          //   </Text>
          // ),
          // tabBarBadgeStyle: {backgroundColor: _red},
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ..._TabBarFont,
                color: focused ? _red : _gray,
                fontFamily: focused ? 'AirbnbCerealBold' : 'AirbnbCerealLight',
              }}
            >
              Inbox
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={'ios-chatbubble-outline'}
              style={{color: focused ? _red : _gray}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ..._TabBarFont,
                color: focused ? _red : _gray,
                fontFamily: focused ? 'AirbnbCerealBold' : 'AirbnbCerealLight',
              }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/icons/Asset37.png')}
              style={{
                tintColor: focused ? _red : _gray,
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
