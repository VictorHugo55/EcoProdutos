import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const lojas = [
    { id: 1, nome: "Loja Verde", endereco: "Rua A, 123", bairro: "Centro", cidade: "São Paulo", estado: "SP", cep: "01001-000" },
    { id: 2, nome: "EcoStore", endereco: "Avenida Paulista, 456", bairro: "Bela Vista", cidade: "São Paulo", estado: "SP", cep: "01310-100" },
    { id: 3, nome: "Loja Sustentável", endereco: "Rua das Flores, 789", bairro: "Jardim Botânico", cidade: "Rio de Janeiro", estado: "RJ", cep: "22240-000" },
    { id: 4, nome: "EcoShop", endereco: "Rua dos Três Rios, 101", bairro: "Centro", cidade: "Belo Horizonte", estado: "MG", cep: "30120-000" },
    { id: 5, nome: "Loja Ecológica", endereco: "Avenida Amazonas, 202", bairro: "Santo Agostinho", cidade: "Belo Horizonte", estado: "MG", cep: "30130-000" },
];

export default function ListaLojas() {
    const openMap = (endereco) => {
        const encodedEndereco = encodeURIComponent(endereco);
        const url = `https://www.google.com/maps?q=${encodedEndereco}`;
        Linking.openURL(url);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Lojas Sustentáveis</Text>
            {lojas.map((loja) => (
                <View key={loja.id} style={styles.card}>
                    <Text style={styles.storeName}>{loja.nome}</Text>
                    <Text style={styles.storeInfo}>
                        {loja.endereco}, {loja.bairro} - {loja.cidade}/{loja.estado} - CEP: {loja.cep}
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => openMap(`${loja.endereco}, ${loja.bairro}, ${loja.cidade}, ${loja.estado}`)}
                    >
                        <Text style={styles.buttonText}>Ver no Mapa</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f4f1',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e7d32',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    storeName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#388e3c',
        marginBottom: 5,
    },
    storeInfo: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#388e3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
