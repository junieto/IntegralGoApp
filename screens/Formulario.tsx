import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Formulario({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Formulario</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home', { nombre: 'Juan' })}
      />
    </View>
  );
}