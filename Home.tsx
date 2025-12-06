import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Video from 'react-native-video';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
      {/* Video local en assets */}
      <Video
        source={require('../assets/video.mp4')}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
        repeat
        muted
        controls
      /> 

      <View style={{ padding: 20 }}>
        <Text variant="headlineMedium" style={{ color: '#FFFFFF', marginBottom: 16 }}>
          Bienvenido a INTEGRALGO
        </Text>

        {/* Botones principales */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home', { mode: 'guest' })}
          style={{ marginBottom: 12, backgroundColor: '#00BCD4' }}
        >
          Ingresar sin registrarse
        </Button>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Formulario')}
          style={{ marginBottom: 12, backgroundColor: '#E91E63' }}
        >
          Registrarse
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Login')}
          style={{ marginBottom: 20, borderColor: '#00BCD4' }}
          textColor="#00BCD4"
        >
          Login
        </Button>

        {/* Sección de servicios con imágenes de internet */}
        <Text variant="titleLarge" style={{ color: '#FFFFFF', marginBottom: 12 }}>
          Nuestros Servicios
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ width: '48%', marginBottom: 16 }}
            onPress={() => navigation.navigate('ServicioDetalle', { id: '1' })}
          >
            <Image
              source={{ uri: 'https://picsum.photos/400/300?random=1' }}
              style={{ width: '100%', height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
            <Text style={{ color: '#FFFFFF', marginTop: 8 }}>Quiropraxia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: '48%', marginBottom: 16 }}
            onPress={() => navigation.navigate('ServicioDetalle', { id: '2' })}
          >
            <Image
              source={{ uri: 'https://picsum.photos/400/300?random=2' }}
              style={{ width: '100%', height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
            <Text style={{ color: '#FFFFFF', marginTop: 8 }}>Rehabilitación</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: '48%', marginBottom: 16 }}
            onPress={() => navigation.navigate('ServicioDetalle', { id: '3' })}
          >
            <Image
              source={{ uri: 'https://picsum.photos/400/300?random=3' }}
              style={{ width: '100%', height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
            <Text style={{ color: '#FFFFFF', marginTop: 8 }}>Masoterapia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: '48%', marginBottom: 16 }}
            onPress={() => navigation.navigate('ServicioDetalle', { id: 'video' })}
          >
            <Image
              source={{ uri: 'https://picsum.photos/400/300?random=4' }}
              style={{ width: '100%', height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
            <Text style={{ color: '#FFFFFF', marginTop: 8 }}>Salud Integral</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
