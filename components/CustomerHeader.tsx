import React from 'react';
import { Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CustomHeader() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Appbar.Header style={{ backgroundColor: '#121212', justifyContent: 'space-between' }}>
      <Text
        variant="displaySmall"
        style={{ fontWeight: '800', color: '#FFFFFF', textAlign: 'center', flex: 1 }}
      >
        INTE
        <Text style={{ color: '#E91E63' }}>GRAL</Text>
        <Text style={{ color: '#00BCD4' }}>GO</Text>
      </Text>

      <Appbar.Action
        icon={(props) => (
          <MaterialCommunityIcons name="menu" size={props.size} color={props.color} />
        )}
        color="#FFFFFF"
        onPress={() => navigation.navigate('Opciones')}
      />

    </Appbar.Header>
  );
}
