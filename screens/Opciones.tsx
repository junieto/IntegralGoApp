import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OpcionesScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons name="home" size={24} color="#fff" />
        <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons name="account" size={24} color="#fff" />
        <Text style={styles.text}>Datos Personales</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons name="clipboard-text" size={24} color="#fff" />
        <Text style={styles.text}>Plan de Tratamiento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons name="logout" size={24} color="#fff" />
        <Text style={styles.text}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40, // 👈 ajusta este valor para “bajar” el menú
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 12,
  },
});
