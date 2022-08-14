import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import ProductScreen from '../screens/ProductScreen';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import MenuScreen from '../screens/MenuScreen';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#ffbd7d',
                tabBarActiveTintColor: '#e47911'
            }}>
                <Tab.Screen 
                    name='home' 
                    component={HomeStack} 
                    options={{ 
                        tabBarIcon: ({color}) => (
                            <Entypo name="home" color={color} size={25} />
                        ), 
                    }}
                />
                <Tab.Screen 
                    name='cart' 
                    component={ShoppingCartStack} 
                    options={{ 
                        tabBarIcon: ({color}) => (
                            <Entypo name="shopping-cart" color={color} size={25} />
                        ), 
                    }}    
                />
                <Tab.Screen 
                    name='profile' 
                    component={ProductScreen} 
                    options={{ 
                        tabBarIcon: ({color}) => (
                            <Entypo name="user" color={color} size={25} />
                        ), 
                    }}
                />
                <Tab.Screen 
                    name='more' 
                    component={MenuScreen} 
                    options={{ 
                        tabBarIcon: ({color}) => (
                            <Entypo name="menu" color={color} size={25} />
                        ), 
                    }}
                />
            </Tab.Navigator>
    );
};

export default BottomTabNav;