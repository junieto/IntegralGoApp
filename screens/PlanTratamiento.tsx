import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import CustomHeader from '../components/CustomerHeader';

export default function PlanTratamiento() {
  return (
    <>
    <CustomHeader/>
    
    <View style={styles.container}>
      <Text variant="headlineMedium">Plan de Tratamiento</Text>
      <Text>Aquí se mostrarán los planes de tratamiento disponibles.</Text>
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
