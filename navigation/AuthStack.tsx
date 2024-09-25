import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Enterphoneoremail from '../screens/Enterphoneoremail';
import ProductEdit from '../screens/ProductEdit';
import ProductDetails from '../screens/ProductDetails';



const Stack = createNativeStackNavigator();

const AuthStack = () => {


  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Enterphoneoremail" component={Enterphoneoremail} />
      <Stack.Screen name="ProductEdit" component={ProductEdit} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default AuthStack;
