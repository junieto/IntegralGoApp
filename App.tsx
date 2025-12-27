import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Formulario from './screens/Formulario';
import HomeScreen from './screens/Home';
import ServicioDetalleScreen from './screens/ServicioDetalle';
import Opciones from './screens/Opciones';
import DatosPersonales from './screens/DatosPersonales';
import PlanTratamiento from './screens/PlanTratamiento';

export type RootStackParamList = {
  Welcome: undefined;
  Home: { mode?: string; email?: string; token?: string } | undefined;
  Register: undefined;
  Login: undefined;
  ServicioDetalle: { id: string };
  DatosPersonales: undefined; 
  PlanTratamiento: undefined;
  Opciones: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme} settings={{ 
      icon: props => 
      <MaterialCommunityIcons {...props} />, 
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
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
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Formulario} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ServicioDetalle" component={ServicioDetalleScreen} />
          <Stack.Screen name="DatosPersonales" component={DatosPersonales} /> 
          <Stack.Screen name="PlanTratamiento" component={PlanTratamiento} />
          <Stack.Screen name="Opciones" component={Opciones} />
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
