import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import CustomHeader from '../components/CustomerHeader';

export default function DatosPersonales() {
  return (
    <>
    <CustomHeader/>    
    <View style={styles.container}>
      <Text variant="headlineMedium">Datos Personales</Text>
      <Text>Esta es la pantalla de datos personales del paciente.</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
