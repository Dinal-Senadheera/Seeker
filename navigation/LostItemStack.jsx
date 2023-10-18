import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateLostItemScreen from '../screens/CreateLostItemScreen';
import LostScreen from '../screens/LostScreen';
import PostBoostingScreen from '../screens/PostBoostingScreen';
import {
  AddLostItem,
  BuyBoost,
  PostBoosting,
} from '../constants/RouteConstants';
import Header from '../components/header';
import BuyBoostScreen from '../screens/purchase/BuyBoost';

const Stack = createStackNavigator();

const LostItemStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyle: { backgroundColor: '#F0F9FF' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Lost"
        component={LostScreen}
        options={{
          headerStyle: {
            backgroundColor: '#0369A1',
          },
          headerTintColor: '#fff', // Change this color for the text/icon color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
          headerTitle: 'Lost Items',
        }}
      />
      <Stack.Screen
        name={AddLostItem}
        component={CreateLostItemScreen}
        options={{
          headerStyle: {
            backgroundColor: '#0369A1',
          },
          headerTintColor: '#fff', // Change this color for the text/icon color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
        }}
      />
      <Stack.Screen
        name={PostBoosting}
        component={PostBoostingScreen}
        options={{
          headerShown: true,
          header: () => <Header title="Post Boosting" />,
        }}
      />
      <Stack.Screen
        name={BuyBoost}
        component={BuyBoostScreen}
        options={{
          headerShown: false,
          header: () => <Header title="Purchase Boost" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default LostItemStack;
