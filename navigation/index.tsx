import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, View, Image, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import AuthStack from './AuthStack';
import { Asset } from 'expo-asset';

import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { AppLoadingScreen } from '../screens/AppLoadingScreen/AppLoadingScreen';
import { useEffect } from 'react';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });


  React.useEffect(() => {
    async function prepare() {
      try {
        // Load any additional assets or fonts here
        await Promise.all([
          Asset.loadAsync([require('../assets/adaptive-icon.png')]),
          // Add other assets or fonts if needed
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => {
          setAppIsReady(true);
          SplashScreen.hideAsync();
        }, 5000);
      }
    }

    prepare();
  }, []);




  if (!fontsLoaded || !appIsReady) {
    // Display the loading screen until the app is ready
    return <AppLoadingScreen />;
  }





  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthStack />
    </NavigationContainer>
  );
}