import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import Formulario from './Formulario';
import Home from './Home';
import ServicioDetalle from './ServicioDetalle';

export type RootStackParamList = {
  Formulario: undefined;
  Home: { nombre: string };
  ServicioDetalle: { servicio: { id: string; nombre: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Formulario">
          <Stack.Screen name="Formulario" component={Formulario} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ServicioDetalle" component={ServicioDetalle} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
