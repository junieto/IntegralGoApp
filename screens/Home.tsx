import React, { useRef, useCallback } from 'react';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Video from 'react-native-video';


export default function HomeScreen({ route, navigation, finished, setFinished }: any) {
  const { mode } = route.params || {};
  const isAuthenticated = mode === 'auth';

  const isFocused = useIsFocused(); 
  // Flag para evitar marcar terminado en el primer montaje 
  const hasEntered = useRef(false); 

  useFocusEffect( 
    useCallback(() => { 
      hasEntered.current = true; // ya entramos una vez 
    return () => { 
      if (hasEntered.current) { 
        // Solo marcamos terminado al salir después de haber entrado 
        setFinished(true); 
      } 
    }; 
  }, [setFinished]) );

  return (
    <ScrollView
     style={{ flex: 1, backgroundColor: '#121212' }}
     contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingTop: 60 }}>
  
      {isAuthenticated && (
  <>
    <Video
      source={{
        uri: 'https://video.wixstatic.com/video/6f2019_eed38e972ccc414f8ddc7748615a9ee8/1080p/mp4/file.mp4',
      }}
      style={{ width: '100%', height: 280, marginTop: 40 }}
      resizeMode="cover"
      repeat={false}
      paused={finished || !isFocused}
      controls
      onEnd={() => setFinished(true)}
      poster="https://static.wixstatic.com/media/6f2019_24240607c97e485ba5323cf5721aed89~mv2.jpg"
    />

    {finished && (
      <TouchableOpacity
        style={{
          backgroundColor: '#1e90ff',
          padding: 10,
          borderRadius: 5,
          marginTop: 12,
        }}
        onPress={() => {
          setFinished(false); // vuelve a habilitar reproducción
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Reproducir de nuevo</Text>
      </TouchableOpacity>
    )}
  </>
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
              style={{ color: '#FFFFFF', marginBottom: 12, marginTop: 24, fontSize: 24, fontWeight: 'bold' }}
            >
              Nuestros Servicios
            </Text>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: "flex-start"
              }}
            >
              <TouchableOpacity //QUIROPRAXIA
                style={{ width: '48%', marginBottom: 8 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '1' })}
              >
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/6f2019_b497e4b291ed4729944767b37823dad9~mv2.png' }}
                  style={{ width: '100%', height: 200, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity //KINESIOLOGIA
                style={{ width: '48%', marginBottom: 8 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '2' })}
              >
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/6f2019_3f2a85ad3dde4b539c2913118e9b7c48~mv2.png' }}
                  style={{ width: '100%', height: 200, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity //MASOTERAPIA
                style={{ width: '48%', marginBottom: 8 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '3' })}
              >
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/6f2019_716dabd9e24d4206bd9eb109dec1c2a2~mv2.png' }}
                  style={{ width: '100%', height: 200, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity //NUTRICION
                style={{ width: '48%', marginBottom: 8 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '4' })}
              >
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/6f2019_3c4f405fad494c3881c4c511e8d7cfbc~mv2.png' }}
                  style={{ width: '100%', height: 200, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity //ACUPUNTURA
                style={{ width: '48%', marginBottom: 8 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '5' })}
              >
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/6f2019_452c1296f4024f0395a775107a2bff77~mv2.png' }}
                  style={{ width: '100%', height: 200, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity //BIENESTAR FEMENINO
                style={{ width: '48%', marginBottom: 8 }}
                onPress={() => navigation.navigate('ServicioDetalle', { id: '6' })}
              >
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/6f2019_5d372e49974d40df8f43ced29eb8aa98~mv2.png' }}
                  style={{ width: '100%', height: 200, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}