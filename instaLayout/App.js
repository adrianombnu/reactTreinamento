import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from 'react-native-vector-icons';

import Home from './src/pages/Home';
import Busca from './src/pages/Busca';
import Shop from './src/pages/Shop';
import Midia from './src/pages/Midia';

const Tab = createBottomTabNavigator();

export default function App(){

  return(
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',

          tabBarStyle:{
            backgroundColor: '#202225',
            borderTopWidth: 0
          }

        }}
      >      

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />
            },
          }}
        />

        <Tab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="search" color={color} size={size} />
            },
          }}
        />

        <Tab.Screen
          name="Midia"
          component={Midia}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="video" color={color} size={size} />
            },
          }}
        />

        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="shopping-bag" color={color} size={size} />
            },
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>
    
  )

}