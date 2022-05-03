import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';

export default function App() {

 const [fontsLoaded] = useFonts ({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  //aguarda o carregamento das fontes na tela de splash

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return(
    //Barra de status translucida em todas as telas do app
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor= "transparent"
        translucent 
      />

    < Home />
    

    </Background>
    
  );
}