import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Video from 'react-native-video';

export default function HomeScreen({ route, navigation }: any) {
  const { mode } = route.params || {};
  const isAuthenticated = mode === 'auth';

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}
    contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
    >
      
      {/* ✅ Video solo si está autenticado */}
      {isAuthenticated && (
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          style={{ width: '100%', height: 200 }}
          resizeMode="cover"
          repeat
          muted
          controls
        />
      )}

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {!isAuthenticated && (
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
        )}
  {/* ✅ Contenedor centrado para los botones */}
  {!isAuthenticated && (
    <View style={{ width: '100%', alignItems: 'center' }}>
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
  )}

        {/* ✅ Servicios solo si está autenticado */}
        {isAuthenticated && (
          <>
            <Text
              variant="titleLarge"
              style={{ color: '#FFFFFF', marginBottom: 12 }}
            >
              Nuestros Servicios
            </Text>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                style={{ width: '48%', marginBottom: 16 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '1' })}
              >
                <Image
                  source={{ uri: 'https://picsum.photos/400/300?random=1' }}
                  style={{ width: '100%', height: 120, borderRadius: 8 }}
                  resizeMode="cover"
                />
                <Text style={{ color: '#FFFFFF', marginTop: 8 }}>
                  Quiropraxia
                </Text>
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
                <Text style={{ color: '#FFFFFF', marginTop: 8 }}>
                  Rehabilitación
                </Text>
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
                <Text style={{ color: '#FFFFFF', marginTop: 8 }}>
                  Masoterapia
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width: '48%', marginBottom: 16 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '4' })}
              >
                <Image
                  source={{ uri: 'https://picsum.photos/400/300?random=4' }}
                  style={{ width: '100%', height: 120, borderRadius: 8 }}
                  resizeMode="cover"
                />
                <Text style={{ color: '#FFFFFF', marginTop: 8 }}>
                  Salud Integral
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}