import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Video from 'react-native-video';

type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeRouteProp;
};

const servicios = [
  {
    id: '1',
    nombre: 'Masaje terapéutico',
    imagen: { uri: 'https://picsum.photos/id/1062/200/200' },
  },
  {
    id: '2',
    nombre: 'Ajuste quiropráctico',
    imagen: { uri: 'https://picsum.photos/id/1005/200/200' },
  },
  {
    id: '3',
    nombre: 'Rehabilitación física',
    imagen: { uri: 'https://picsum.photos/id/1025/200/200' },
  },
];

export default function Home({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido {route.params.nombre}</Text>

      {/* Video sin controles, autoplay, loop */}
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={{ width: '100%', height: 200 }}
        resizeMode="contain"
        repeat
        paused={false}   // autoplay
        muted={true}
      />



      {/* Lista de servicios con imágenes */}
      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.servicio}>
            <Image
              source={item.imagen}
              style={styles.imagen}
              onError={(e) => console.log('Image error:', item.id, e.nativeEvent)}
            />
            <Text style={styles.nombre}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  video: { width: '100%', height: 200, marginBottom: 20, borderRadius: 10, backgroundColor: '#000' },
  servicio: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  imagen: { width: 60, height: 60, marginRight: 10, borderRadius: 8, backgroundColor: '#eee' },
  nombre: { fontSize: 16 },
});
