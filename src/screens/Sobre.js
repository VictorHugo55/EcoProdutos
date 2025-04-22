import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores 👨‍💻👩‍💻</Text>

      <Image source={require('../../assets/victor.jpg')} style={styles.devImage} />
      <Text style={styles.name}>Victor Hugo Carvalho Pereira</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/seu-linkedin')}>
        <Text style={styles.link}>LinkedIn</Text>
      </TouchableOpacity>
    {/*
      <Image source={require('./assets/dev2.png')} style={styles.devImage} />
      <Text style={styles.name}>Vitor Ginza</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/seu-instagram')}>
        <Text style={styles.link}>Instagram</Text>
      </TouchableOpacity>
  */}

      <Text style={styles.desc}>
        O EcoHome é um projeto desenvolvido com o objetivo de incentivar ações sustentáveis e educar a sociedade sobre o consumo consciente.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f1f8e9',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#33691e',
    marginBottom: 20,
  },
  devImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    color: '#2e7d32',
  },
  link: {
    fontSize: 14,
    color: '#1b5e20',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  desc: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#4e342e',
  },
});
