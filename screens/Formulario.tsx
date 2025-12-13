import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { registerSupabase } from '../services/supabaseRegister';

export default function Formulario({ navigation }: any) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorName, setErrorName] = useState<string | undefined>();
  const [errorPhone, setErrorPhone] = useState<string | undefined>();
  const [errorBirthdate, setErrorBirthdate] = useState<string | undefined>();
  const [errorEmail, setErrorEmail] = useState<string | undefined>();
  const [errorPassword, setErrorPassword] = useState<string | undefined>();
  const [apiError, setApiError] = useState<string | undefined>();

  const onSubmit = async () => {
    setErrorName(undefined);
    setErrorPhone(undefined);
    setErrorBirthdate(undefined);
    setErrorEmail(undefined);
    setErrorPassword(undefined);
    setApiError(undefined);

    let valid = true;

    if (!name.trim()) {
      setErrorName('Ingresa tu nombre');
      valid = false;
    }

    if (!phone || !/^\d{8,15}$/.test(phone)) {
      setErrorPhone('Ingresa un teléfono válido (solo números)');
      valid = false;
    }

    if (!birthdate || !/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      setErrorBirthdate('Formato inválido. Usa YYYY-MM-DD');
      valid = false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorEmail('Ingresa un email válido');
      valid = false;
    }

    if (!password || password.length < 4) {
      setErrorPassword('La contraseña debe tener mínimo 4 caracteres');
      valid = false;
    }

    if (!valid) return;

    try {
      const data = await registerSupabase({
        name,
        phone,
        birthdate,
        email,
        password
      });

      navigation.navigate('Home', {
        mode: 'auth',
        email,
        token: data.access_token
      });

    } catch (error: any) {
      setApiError(error.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 24 }}>
        Registro
      </Text>

      <TextInput
        label="Nombre"
        value={name}
        onChangeText={setName}
        error={!!errorName}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorName && <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorName}</Text>}

      <TextInput
        label="Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        error={!!errorPhone}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorPhone && <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorPhone}</Text>}

      <TextInput
        label="Nacimiento (YYYY-MM-DD)"
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="numeric"
        error={!!errorBirthdate}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorBirthdate && <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorBirthdate}</Text>}

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        error={!!errorEmail}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorEmail && <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorEmail}</Text>}

      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={!!errorPassword}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errorPassword && <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errorPassword}</Text>}

      {apiError && <Text style={{ color: '#FF5722', marginBottom: 12 }}>{apiError}</Text>}

      <Button mode="contained" onPress={onSubmit} style={{ marginTop: 8, backgroundColor: '#00BCD4' }}>
        Registrarse
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Login')}
        style={{ marginTop: 16 }}
        textColor="#CCCCCC"
      >
        Ya tengo cuenta
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Home', { mode: 'guest' })}
        style={{ marginTop: 16, borderColor: '#00BCD4' }}
        textColor="#00BCD4"
>
        Volver al Home
      </Button>
    </View>
  );
}