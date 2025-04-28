import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Desafios() {
  const [desafios, setDesafios] = useState([
    { id: 1, texto: "🌳 Plantar uma árvore essa semana", feito: false },
    { id: 2, texto: "🚲 Usar bicicleta para ir ao trabalho por um dia", feito: false },
    { id: 3, texto: "💡 Desligar as luzes ao sair de casa por uma semana", feito: false },
    { id: 4, texto: "🌎 Participar de um mutirão de limpeza local", feito: false },
    { id: 5, texto: "♻️ Separar corretamente o lixo reciclável por uma semana", feito: false },
  ]);

  // Carregar desafios salvos no AsyncStorage
  useEffect(() => {
    const carregarDesafios = async () => {
      try {
        const dadosSalvos = await AsyncStorage.getItem('desafios');
        if (dadosSalvos) {
          setDesafios(JSON.parse(dadosSalvos));
        }
      } catch (error) {
        console.log('Erro ao carregar desafios:', error);
      }
    };
    carregarDesafios();
  }, []);

  // Salvar desafios atualizados
  const salvarDesafios = async (dados) => {
    try {
      await AsyncStorage.setItem('desafios', JSON.stringify(dados));
    } catch (error) {
      console.log('Erro ao salvar desafios:', error);
    }
  };

  // Marcar desafio como feito
  const marcarComoFeito = (id) => {
    const novosDesafios = desafios.map(d =>
      d.id === id ? { ...d, feito: true } : d
    );
    setDesafios(novosDesafios);
    salvarDesafios(novosDesafios);
  };

  // Refazer desafio
  const refazerDesafio = (id) => {
    const novosDesafios = desafios.map(d =>
      d.id === id ? { ...d, feito: false } : d
    );
    setDesafios(novosDesafios);
    salvarDesafios(novosDesafios);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🚀 Desafios Sustentáveis</Text>

      {desafios.map((desafio) => (
        <View key={desafio.id} style={styles.card}>
          <Text style={styles.textoDesafio}>{desafio.texto}</Text>

          {!desafio.feito ? (
            <TouchableOpacity style={styles.botao} onPress={() => marcarComoFeito(desafio.id)}>
              <Text style={styles.botaoTexto}>✅ Marcar como feito</Text>
            </TouchableOpacity>
          ) : (
            <>
              <Text style={styles.feito}>🎉 Desafio Concluído!</Text>
              <TouchableOpacity style={styles.botaoRefazer} onPress={() => refazerDesafio(desafio.id)}>
                <Text style={styles.botaoTexto}>🔄 Refazer</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f8e9',
    flexGrow: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoDesafio: {
    fontSize: 16,
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#388e3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 8,
  },
  botaoRefazer: {
    backgroundColor: '#1e88e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  feito: {
    marginTop: 10,
    color: '#1b5e20',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
