import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Linking,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function OndeComprar() {
  const [cidade, setCidade] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarLojas = async () => {
    Keyboard.dismiss();
    setResultados([]);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=mercado+ecologico+${encodeURIComponent(cidade)}`;

    try {
      const resposta = await fetch(url, {
        headers: {
          'User-Agent': 'EcoProdutosApp/1.0',
        },
      });
      const dados = await resposta.json();
      setResultados(dados);
    } catch (err) {
      alert('Erro ao buscar estabelecimentos');
    }
  };

  const latitudeInicial =
    resultados.length > 0 ? parseFloat(resultados[0].lat) : -23.5325;
  const longitudeInicial =
    resultados.length > 0 ? parseFloat(resultados[0].lon) : -46.7917;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View>
        <Text style={styles.titulo}>🛒 Onde Comprar</Text>

        <TextInput
          placeholder="Digite sua cidade"
          value={cidade}
          onChangeText={setCidade}
          style={styles.input}
        />

        <TouchableOpacity style={styles.botao} onPress={buscarLojas}>
          <Text style={styles.botaoTexto}>Buscar Mercados Sustentáveis</Text>
        </TouchableOpacity>

        {resultados.length > 0 && (
          <>
            <Text style={styles.subtitulo}>🗺 Resultados no Mapa:</Text>

            <MapView
              style={styles.mapa}
              initialRegion={{
                latitude: latitudeInicial,
                longitude: longitudeInicial,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              {resultados.map((item, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: parseFloat(item.lat),
                    longitude: parseFloat(item.lon),
                  }}
                  title={'Mercado Ecológico'}
                  description={item.display_name}
                />
              ))}
            </MapView>

            <Text style={styles.subtitulo}>📋 Resultados em Lista:</Text>
          </>
        )}
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={resultados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.resultado}>📍 {item.display_name}</Text>

            <TouchableOpacity
              style={styles.mapsButton}
              onPress={() => {
                const url = `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`;
                Linking.openURL(url);
              }}
            >
              <Text style={styles.mapsButtonText}>Abrir no Google Maps</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f1f8e9',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b5e20',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2e7d32',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: '#66bb6a',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 12,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#388e3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  mapa: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 14,
    color: '#2e7d32',
    marginBottom: 10,
    textAlign: 'center',
  },
  mapsButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  mapsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
