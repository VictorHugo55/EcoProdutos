import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Dicas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dicas Ecológicas 🌿</Text>

      <View style={styles.tipCard}>
        <Image source={require('../../assets/recycle.png')} style={styles.image} />
        <Text style={styles.tipTitle}>Separe seu lixo</Text>
        <Text style={styles.tipText}>Tenha lixeiras para recicláveis e orgânicos em casa.</Text>
      </View>

      <View style={styles.tipCard}>
        <Image source={require('../../assets/shower.png')} style={styles.image} />
        <Text style={styles.tipTitle}>Reduza o tempo no banho</Text>
        <Text style={styles.tipText}>Economize água diminuindo o tempo de banho.</Text>
      </View>

      <View style={styles.tipCard}>
        <Image source={require('../../assets/bag.png')} style={styles.image} />
        <Text style={styles.tipTitle}>Use ecobags</Text>
        <Text style={styles.tipText}>Evite sacolas plásticas nas compras do dia a dia.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f1f8e9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#33691e',
    marginBottom: 20,
  },
  tipCard: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2e7d32',
    marginBottom: 5,
  },
  tipText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
