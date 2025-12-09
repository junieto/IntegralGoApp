import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Text, TextInput, Button, RadioButton } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import Login from './screens/Login';

export default function App() {
  useEffect(() => {
    // Oculta el splash cuando React Native ya montó
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: { mode: 'guest' | 'login' | 'register'; name?: string; email?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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

function ContainerFull({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Welcome Screen
function WelcomeScreen({ navigation }: any) {
  return (
    <ContainerFull>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text variant="headlineMedium" style={{ color: '#FFFFFF', marginBottom: 8 }}>
          Bienvenido a
        </Text>
        <Text variant="displaySmall" style={{ fontWeight: '800', color: '#FFFFFF', marginBottom: 4 }}>
          INTE
          <Text style={{ color: '#E91E63' }}>GRAL</Text>
          <Text style={{ color: '#00BCD4' }}>GO</Text>
        </Text>
        <Text variant="bodyMedium" style={{ color: '#CCCCCC', marginBottom: 32 }}>
          Quiropraxia y salud integral
        </Text>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home', { mode: 'guest' })}
          style={{ marginBottom: 12, width: '80%', backgroundColor: '#00BCD4' }}
        >
          Ingresar sin registrarse
        </Button>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Register')}
          style={{ marginBottom: 12, width: '80%', backgroundColor: '#E91E63' }}
        >
          Registrarse
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Login')}
          style={{ marginTop: 8, width: '80%', borderColor: '#00BCD4' }}
          textColor="#00BCD4"
        >
          Login
        </Button>

        <Text variant="labelSmall" style={{ color: '#888', marginTop: 24 }}>
          Versión 1.0
        </Text>
      </View>
    </ContainerFull>
  );
}

// Login Screen
function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState<string | undefined>();
  const [errorPassword, setErrorPassword] = useState<string | undefined>();

  const onSubmit = () => {
    setErrorEmail(undefined);
    setErrorPassword(undefined);
    let valid = true;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorEmail('Ingresa un email válido');
      valid = false;
    }
    if (!password || password.length < 4) {
      setErrorPassword('Ingresa tu contraseña (mín. 4 caracteres)');
      valid = false;
    }

    if (!valid) return;

    navigation.navigate('Home', { mode: 'login', email });
  };

  return (
    <ContainerFull>
      <Text variant="headlineMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 20 }}>
        Login
      </Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={Boolean(errorEmail)}
        style={{ marginBottom: 12, backgroundColor: theme.colors.surface }}
      />
      {errorEmail ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorEmail}</Text> : null}

      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={Boolean(errorPassword)}
        style={{ marginBottom: 12, backgroundColor: theme.colors.surface }}
      />
      {errorPassword ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorPassword}</Text> : null}

      <Button mode="contained" onPress={onSubmit} style={{ marginTop: 8, backgroundColor: '#00BCD4' }}>
        Ingresar
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Welcome')}
        style={{ marginTop: 16 }}
        textColor="#CCCCCC"
      >
        Volver
      </Button>
    </ContainerFull>
  );
}

// Register Screen
function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState(''); // DD/MM/AAAA
  const [gender, setGender] = useState<'male' | 'female' | 'none'>('none');
  const [info, setInfo] = useState('');

  const [errName, setErrName] = useState<string | undefined>();
  const [errDob, setErrDob] = useState<string | undefined>();

  const validateDob = (v: string) => /^\d{2}\/\d{2}\/\d{4}$/.test(v);

  const onSubmit = () => {
    setErrName(undefined);
    setErrDob(undefined);
    let valid = true;

    if (!name || name.trim().length < 2) {
      setErrName('Ingresa tu nombre completo');
      valid = false;
    }
    if (!dob || !validateDob(dob)) {
      setErrDob('Usa el formato DD/MM/AAAA');
      valid = false;
    }
    if (!valid) return;

    navigation.navigate('Home', { mode: 'register', name });
  };

  return (
    <ContainerFull>
      <Text variant="headlineMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 20 }}>
        Registro
      </Text>

      <TextInput
        label="Nombre completo"
        value={name}
        onChangeText={setName}
        error={Boolean(errName)}
        style={{ marginBottom: 12, backgroundColor: theme.colors.surface }}
      />
      {errName ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errName}</Text> : null}

      <TextInput
        label="Fecha de nacimiento (DD/MM/AAAA)"
        value={dob}
        onChangeText={setDob}
        keyboardType="number-pad"
        error={Boolean(errDob)}
        style={{ marginBottom: 12, backgroundColor: theme.colors.surface }}
      />
      {errDob ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errDob}</Text> : null}

      <Text variant="titleSmall" style={{ color: '#CCCCCC', marginTop: 8, marginBottom: 8 }}>
        Género
      </Text>
      <RadioButton.Group onValueChange={(value) => setGender(value as any)} value={gender}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <RadioButton value="male" />
          <Text style={{ color: '#FFFFFF', marginRight: 16 }}>Masculino</Text>
          <RadioButton value="female" />
          <Text style={{ color: '#FFFFFF', marginRight: 16 }}>Femenino</Text>
          <RadioButton value="none" />
          <Text style={{ color: '#FFFFFF' }}>Prefiero no decir</Text>
        </View>
      </RadioButton.Group>

      <TextInput
        label="Información adicional"
        value={info}
        onChangeText={setInfo}
        multiline
        style={{ marginBottom: 12, backgroundColor: theme.colors.surface, minHeight: 100 }}
      />

      <Button mode="contained" onPress={onSubmit} style={{ marginTop: 8, backgroundColor: '#E91E63' }}>
        Continuar
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Welcome')}
        style={{ marginTop: 16 }}
        textColor="#CCCCCC"
      >
        Volver
      </Button>
    </ContainerFull>
  );
}

// Home Screen (placeholder)
function HomeScreen({ route, navigation }: any) {
  const { mode, name, email } = route.params || {};
  return (
    <ContainerFull>
      <Text variant="headlineMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 12 }}>
        Home
      </Text>
      <Text variant="bodyLarge" style={{ color: '#CCCCCC', textAlign: 'center', marginBottom: 24 }}>
        Modo: {String(mode).toUpperCase()}
      </Text>
      {!!name && (
        <Text variant="bodyMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}>
          Bienvenido, {name ?? ''}
        </Text>
      )}
      {!!email && (
        <Text variant="bodyMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}>
          Email: {email ?? ''}
        </Text>
      )}
      <Button mode="contained" onPress={() => navigation.navigate('Welcome')} style={{ backgroundColor: '#00BCD4' }}>
        Salir
      </Button>
    </ContainerFull>
  );
}