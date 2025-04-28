import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🌱 Bem-vindo ao <Text style={styles.brand}>EcoHome</Text> 🌿</Text>

      <Image source={require('../../assets/home-eco.png')} style={styles.image} />

      <Text style={styles.subtitle}>Juntos por um futuro mais sustentável!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>🛒 Cadastrar Produto</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Catalogo')}>
          <Text style={styles.buttonText}>📗 Ver Catálogo Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Desafios')}>
          <Text style={styles.buttonText}>🚀 Desafios Sustentáveis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dicas')}>
          <Text style={styles.buttonText}>♻️ Dicas Ecológicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.buttonText}>ℹ️ Sobre o Projeto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clima')}>
          <Text style={styles.buttonText}>🌤 Clima Sustentável</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1b5e20',
    textAlign: 'center',
    marginBottom: 20,
  },
  brand: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#43a047',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
