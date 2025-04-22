import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌱 Bem-vindo ao EcoHome 🌿</Text>
            <Image source={require('../../assets/home-eco.png')} style={styles.image} />
            <Text style={styles.subtitle}>Juntos por um futuro mais sustentável!</Text>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.btnText}>Cadastrar Produto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Catalogo')}>
                <Text style={styles.btnText}>Ver Catálogo Verde</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Dicas')}>
                <Text style={styles.btnText}>Dicas Ecológicas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.btnText}>Sobre o Projeto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Clima')}>
                <Text style={styles.btnText}>🌤 Clima Sustentável</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8F5E9',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1B5E20',
        marginBottom: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: '#388E3C',
        marginBottom: 30,
        textAlign: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#43A047',
        padding: 15,
        borderRadius: 25,
        marginVertical: 8,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
});
