import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // importa tu tipo de rutas

type Props = NativeStackScreenProps<RootStackParamList, 'Opciones'>;

export default function OpcionesScreens({ navigation }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <List.Section>
        <List.Item
          title="Inicio"
          left={props => <List.Icon {...props} icon="home" />}
          onPress={() => navigation.navigate('Home')}
        />
        <List.Item
          title="Datos Personales"
          left={props => <List.Icon {...props} icon="account" />}
          onPress={() => navigation.navigate('DatosPersonales')}
        />
        <List.Item
          title="Plan de Tratamiento"
          left={props => <List.Icon {...props} icon="clipboard-text" />}
          onPress={() => navigation.navigate('PlanTratamiento')}
        />
        <List.Item
          title="Cerrar Sesión"
          left={props => <List.Icon {...props} icon="logout" />}
          onPress={() => navigation.navigate('Welcome')}
        />
      </List.Section>
    </View>
  );
}
