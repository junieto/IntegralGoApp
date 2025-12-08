import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }: any) {
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
    <View style={{ flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 24 }}>
        Login
      </Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={Boolean(errorEmail)}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorEmail ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorEmail}</Text> : null}

      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={Boolean(errorPassword)}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorPassword ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorPassword}</Text> : null}

      <Button mode="contained" onPress={onSubmit} style={{ marginTop: 8, backgroundColor: '#00BCD4' }}>
        Ingresar
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Home')}
        style={{ marginTop: 16 }}
        textColor="#CCCCCC"
      >
        Volver
      </Button>
    </View>
  );
}
