import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ClimaScreen() {
  const [cidade, setCidade] = useState('');
  const [dadosClima, setDadosClima] = useState(null);
  const [erro, setErro] = useState('');

  const buscarClima = async () => {
    try {
      const apiKey = '22ea95d766e692d4a705a3049b1d9901';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.cod === 200) {
        setDadosClima(dados);
        setErro('');
      } else {
        setErro('Cidade não encontrada');
        setDadosClima(null);
      }
    } catch (error) {
      setErro('Erro ao buscar dados');
    }
  };

  const gerarDica = (clima) => {
    if (clima.includes('chuva')) return 'Evite lavar o carro hoje e economize água!';
    if (clima.includes('sol')) return 'Aproveite para secar roupas ao ar livre.';
    if (clima.includes('nuvens')) return 'Reduza o uso de iluminação artificial hoje.';
    return 'Mantenha hábitos sustentáveis!';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌤 Clima Sustentável</Text>
      <Image source={require('../../assets/weather.png')} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Digite a cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <TouchableOpacity style={styles.button} onPress={buscarClima}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      {dadosClima && (
        <View style={styles.resultado}>
          <Text style={styles.texto}>
            🌡 Temperatura: {dadosClima.main.temp}°C
          </Text>
          <Text style={styles.texto}>
            ☁ Clima: {dadosClima.weather[0].description}
          </Text>
          <Text style={styles.dica}>
            💡 Dica Ecológica: {gerarDica(dadosClima.weather[0].description)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#00796b',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#004d40',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  erro: {
    color: 'red',
    marginTop: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
    color: '#004d40',
  },
  dica: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#388e3c',
    textAlign: 'center',
  },
});
