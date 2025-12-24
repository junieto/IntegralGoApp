import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Video from 'react-native-video';

export default function ServicioDetalleScreen({ route, navigation }: any) {
  const { id } = route.params || {};

  // Definimos servicios con imágenes y video desde internet
  const SERVICIOS: any = {
    '1': {
      titulo: 'Quiropraxia',
      descripcion: 'Alineación y ajuste de la columna para mejorar movilidad y reducir dolor.',
      mediaType: 'image',
      source: { uri: 'https://picsum.photos/600/400?random=1' },
    },
    '2': {
      titulo: 'Rehabilitación',
      descripcion: 'Ejercicios y técnicas de recuperación funcional para lesiones musculares y articulares.',
      mediaType: 'image',
      source: { uri: 'https://picsum.photos/600/400?random=2' },
    },
    '3': {
      titulo: 'Masoterapia',
      descripcion: 'Terapias manuales para aliviar tensión, mejorar circulación y promover relajación.',
      mediaType: 'image',
      source: { uri: 'https://picsum.photos/600/400?random=3' },
    },
    'video': {
      titulo: 'Salud Integral',
      descripcion: 'Enfoque holístico que integra quiropraxia, hábitos saludables y movimiento consciente.',
      mediaType: 'video',
      source: { uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    },
  };

  const servicio = SERVICIOS[id] || SERVICIOS['1'];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ padding: 20 }}>
        <Text variant="headlineMedium" style={{ color: '#FFFFFF', marginBottom: 24, marginTop: 30, textAlign: "center" }}>
          {servicio.titulo}
        </Text>
        <Text variant="bodyMedium" style={{ color: '#CCCCCC', marginBottom: 16, textAlign: "center" }}>
          {servicio.descripcion}
        </Text>

        {servicio.mediaType === 'image' ? (
          <Image
            source={servicio.source}
            style={{ width: '100%', height: 220, borderRadius: 12, marginBottom: 20 }}
            resizeMode="cover"
          />
        ) : (
          <Video
            source={servicio.source}
            style={{ width: '100%', height: 220, borderRadius: 12, marginBottom: 20 }}
            resizeMode="cover"
            repeat
            muted
            controls
          />
        )}

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Formulario')}
          style={{ marginBottom: 12, backgroundColor: '#E91E63' }}
        >
          Reservar / Registrarse
        </Button>

        <Button
           mode="outlined"
            onPress={() => navigation.navigate('Home', { mode: 'auth' })}
            style={{ borderColor: '#00BCD4' }}
            textColor="#00BCD4"
        >
        Volver
        </Button>
      </View>
    </ScrollView>
  );
}
