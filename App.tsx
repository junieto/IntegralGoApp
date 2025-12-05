import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Formulario from './screens/Formulario';
import Home from './screens/Home';
import ServicioDetalle from './screens/ServicioDetalle';
import SplashScreen from 'react-native-splash-screen';

// Tipado de las rutas
export type RootStackParamList = {
  Formulario: undefined;
  Home: { nombre: string };
  ServicioDetalle: { servicio: { id: string; nombre: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    SplashScreen.hide(); // 👈 oculta el splash al montar la app
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ServicioDetalle" component={ServicioDetalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
