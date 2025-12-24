import * as React from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Text, TextInput, Button, RadioButton } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import Login from './screens/Login';
import Formulario from './screens/Formulario';
import HomeScreen from './screens/Home';
import ServicioDetalleScreen from './screens/ServicioDetalle';

export type RootStackParamList = {
  Home: { mode?: string; email?: string; token?: string } | undefined;
  Register: undefined;
  Login: undefined;
  ServicioDetalle: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}
        >
          {/* 👇 pasamos finished y setFinished como props */}
          <Stack.Screen name="Home">
            {(props) => (
              <HomeScreen
                {...props}
                finished={finished}
                setFinished={setFinished}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Register" component={Formulario} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ServicioDetalle" component={ServicioDetalleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// Tema con tus colores
const theme = {
  ...require('react-native-paper').MD3LightTheme,
  colors: {
    ...require('react-native-paper').MD3LightTheme.colors,
    primary: '#00BCD4',     // Turquesa
    secondary: '#E91E63',   // Magenta
    background: '#121212',  // Fondo oscuro
    surface: '#1E1E1E',
    onPrimary: '#FFFFFF',
    onSurface: '#FFFFFF',
    outline: '#2A2A2A',
  },
};
