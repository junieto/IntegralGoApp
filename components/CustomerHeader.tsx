import React from 'react';
import { Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

export default function CustomHeader() {
  return (
    <Appbar.Header style={{ backgroundColor: '#121212', justifyContent: 'center' }}>
      <Text
        variant="displaySmall"
        style={{ fontWeight: '800', color: '#FFFFFF', textAlign: 'center' }}
      >
        INTE
        <Text style={{ color: '#E91E63' }}>GRAL</Text>
        <Text style={{ color: '#00BCD4' }}>GO</Text>
      </Text>
    </Appbar.Header>
  );
}