import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, TextInput, Button, RadioButton } from 'react-native-paper';

export default function FormularioScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
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
    <ScrollView style={{ flex: 1, backgroundColor: '#121212', padding: 20 }}>
      <Text variant="headlineMedium" style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 20 }}>
        Registro
      </Text>

      <TextInput
        label="Nombre completo"
        value={name}
        onChangeText={setName}
        error={Boolean(errName)}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
      />
      {errName ? <Text style={{ color: '#E91E63', marginBottom: 12 }}>{errName}</Text> : null}

      <TextInput
        label="Fecha de nacimiento (DD/MM/AAAA)"
        value={dob}
        onChangeText={setDob}
        keyboardType="number-pad"
        error={Boolean(errDob)}
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E' }}
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
        style={{ marginBottom: 12, backgroundColor: '#1E1E1E', minHeight: 100 }}
      />

      <Button mode="contained" onPress={onSubmit} style={{ marginTop: 8, backgroundColor: '#E91E63' }}>
        Continuar
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Home')}
        style={{ marginTop: 16 }}
        textColor="#CCCCCC"
      >
        Volver
      </Button>
    </ScrollView>
  );
}
