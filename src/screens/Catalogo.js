import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Catalogo() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Catálogo Verde</Text>
            <Text style={styles.description}>Conheça nossos produtos sustentáveis que ajudam a economizar energia e proteger o planeta!</Text>

            <View style={styles.card}>
                <Image source={require('../../assets/led-lamp.png')} style={styles.image} />
                <Text style={styles.productName}>Lâmpada LED</Text>
                <Text style={styles.productDesc}>Eficiente, econômica e ecológica.</Text>
            </View>

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
    }
});
