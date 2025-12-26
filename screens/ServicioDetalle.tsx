import React from 'react';
import { ScrollView, Image, View, Linking } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Video from 'react-native-video';
import CustomHeader from '../components/customerHeader';


export default function ServicioDetalleScreen({ route, navigation }: any) {
  const { id } = route.params || {};

  // Definimos servicios con imágenes y video
  const SERVICIOS: any = {
    '1': {
      titulo: 'Quiropraxia',
      mediaType: 'image',
      source: { uri: 'https://static.wixstatic.com/media/6f2019_b7467ce3e5fd44d08dc30ef24808faf0~mv2.jpg' },
      descripcion: 'En IntegralGO, la quiropraxia es mucho más que un ajuste: es el inicio de un proceso de transformación. Te ayudamos a recuperar el equilibrio entre columna, sistema nervioso, descanso, nutrición y movimiento, para que tu cuerpo funcione como realmente puede y merece.',
    },
    '2': {
      titulo: 'Kinesiología',
      source: { uri: 'https://static.wixstatic.com/media/6f2019_a4121c0d12984d5db7c9ba5117aeaf99~mv2.jpg' },
      descripcion: 'Cuando el cuerpo pierde movimiento, pierde libertad. En IntegralGO, la kinesiología es una terapia activa y personalizada que te ayuda a recuperar movilidad, fuerza y confianza, devolviéndote la libertad de moverte sin dolor.',
      mediaType: 'image',
    },
    '3': {
      titulo: 'Masoterapia',
      source: { uri: 'https://static.wixstatic.com/media/6f2019_ec350a0d5b654ea7a5202792969840f1~mv2.jpg' },
      descripcion: 'En IntegralGO, la masoterapia no es un servicio secundario, sino una herramienta terapéutica clave para tu recuperación. Combinamos técnicas manuales precisas para aliviar el dolor, relajar la tensión y favorecer tu bienestar físico, emocional y funcional.',
      mediaType: 'image',
    },
    '4': {
      titulo: 'Nutrición',
      source: { uri: 'https://static.wixstatic.com/media/6f2019_f92c0bc553fd4a008ce2a906d3cc942b~mv2.jpg' },
      descripcion: 'En IntegralGO, la nutrición es parte esencial del tratamiento. Nuestro equipo de nutricionistas clínicos trabaja junto al área terapéutica para mejorar desde la raíz lo que muchas veces no se ve, pero define cómo te sientes y te mueves cada día.',
      mediaType: 'image',
    },
    '5': {
      titulo: 'Acupuntura',
      source: { uri: 'https://static.wixstatic.com/media/6f2019_e30123a686fb4f4ebf72d54545fcfaff~mv2.jpg' },
      descripcion: 'En IntegralGO, la acupuntura es mucho más que agujas: es una herramienta para restaurar tu equilibrio físico y emocional. Te ayudamos a aliviar el dolor, reducir el estrés y reconectar con la energía natural de tu cuerpo.',
      mediaType: 'image',
    },
    '6': {
      titulo: 'Bienestar Femenino',
      source: { uri: 'https://static.wixstatic.com/media/6f2019_2febe81c915a4e10a338182210174ba3~mv2.jpg' },
      descripcion: 'En IntegralGO, el bienestar femenino es una experiencia de autocuidado y conexión. Acompañamos a cada mujer a equilibrar cuerpo, mente y emociones, y si estás embarazada, vivir esta etapa de forma plena y consciente.',
      mediaType: 'image',
    },
  };

  const servicio = SERVICIOS[id] || SERVICIOS['1'];

  return (
    <>
    <CustomHeader />
    
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ padding: 20 }}>
        <Text variant="headlineMedium" style={{ color: '#FFFFFF', marginBottom: 24, marginTop: 30, textAlign: "center" }}>
          {servicio.titulo}
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

        <Text variant="bodyMedium" style={{ color: '#CCCCCC', marginBottom: 16, textAlign: "center" }}>
          {servicio.descripcion}
        </Text>

        <Button
          mode="contained"
          onPress={() => Linking.openURL('https://c3c991b132f29edb9376a845e2ef29c9adbca4af.agenda.softwaredentalink.com/agenda?modalidad=1')}
          style={{ marginBottom: 12, backgroundColor: '#E91E63' }}
        >
          Reservar
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
    </>
  );
}
