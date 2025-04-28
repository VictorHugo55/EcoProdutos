import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Catalogo({ navigation }) {
<<<<<<< HEAD
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Catálogo Verde</Text>
            <Text style={styles.description}>Conheça nossos produtos sustentáveis que ajudam a economizar energia e proteger o planeta!</Text>
=======
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarTexto}>← Voltar</Text>
      </TouchableOpacity>
>>>>>>> 3b8192f (feat: integração de busca de mercados sustentáveis e ajustes visuais na Home)

      <Text style={styles.title}>Catálogo Verde</Text>
      <Text style={styles.description}>
        Conheça nossos produtos sustentáveis que ajudam a economizar energia e proteger o planeta!
      </Text>

      <View style={styles.card}>
        <Image source={require('../../assets/led-lamp.png')} style={styles.image} />
        <Text style={styles.productName}>Lâmpada LED</Text>
        <Text style={styles.productDesc}>Eficiente, econômica e ecológica.</Text>
      </View>

<<<<<<< HEAD
            <View style={styles.card}>
                <Image source={require('../../assets/smart-plug.png')} style={styles.image} />
                <Text style={styles.productName}>Tomada Inteligente</Text>
                <Text style={styles.productDesc}>Controle seus aparelhos pelo celular.</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ListaLojas')}
            >
                <Text style={styles.buttonText}>Ver Lojas</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e6f9ec'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2e7d32'
    },
    productDesc: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#388e3c',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
=======
      <View style={styles.card}>
        <Image source={require('../../assets/solar-panel.png')} style={styles.image} />
        <Text style={styles.productName}>Painel Solar</Text>
        <Text style={styles.productDesc}>Transforme luz solar em energia limpa.</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/smart-plug.png')} style={styles.image} />
        <Text style={styles.productName}>Tomada Inteligente</Text>
        <Text style={styles.productDesc}>Controle seus aparelhos pelo celular.</Text>
      </View>

      {/* 🔘 Botão Onde Comprar */}
      <TouchableOpacity style={styles.botaoComprar} onPress={() => navigation.navigate('OndeComprar')}>
        <Text style={styles.botaoComprarTexto}>🛒 Onde Comprar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f9ec',
    flexGrow: 1,
  },
  voltar: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  voltarTexto: {
    fontSize: 16,
    color: '#1b5e20',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2e7d32',
  },
  productDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  botaoComprar: {
    backgroundColor: '#1b5e20',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  botaoComprarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
>>>>>>> 3b8192f (feat: integração de busca de mercados sustentáveis e ajustes visuais na Home)
});
