import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
        <>
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
          </>

        {/* ✅ Botones */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home', { mode: 'auth' })}
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
    </>
  );
}
