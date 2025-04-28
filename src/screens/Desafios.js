import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Desafios() {
  const [desafios, setDesafios] = useState([
    { id: 1, texto: "🌳 Plantar uma árvore essa semana", feito: false },
    { id: 2, texto: "🚲 Usar bicicleta para ir ao trabalho por um dia", feito: false },
    { id: 3, texto: "💡 Desligar as luzes ao sair de casa por uma semana", feito: false },
    { id: 4, texto: "♻️ Separar lixo reciclável em casa por 7 dias", feito: false },
    { id: 5, texto: "🛒 Levar sacola reutilizável para o mercado", feito: false },
    { id: 6, texto: "🚿 Tomar banhos de no máximo 5 minutos por 3 dias", feito: false },
    { id: 7, texto: "🛍️ Comprar de pequenos produtores locais", feito: false },
    { id: 8, texto: "🚶‍♂️ Fazer uma caminhada ao invés de usar o carro", feito: false },
    { id: 9, texto: "🍃 Plantar uma pequena horta em casa", feito: false },
    { id: 10, texto: "🔌 Desligar aparelhos da tomada ao não usar", feito: false },
  ]);

  const marcarComoFeito = (id) => {
    setDesafios(desafios.map(d => d.id === id ? { ...d, feito: true } : d));
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
            <Text style={styles.feito}>Desafio Concluído! 🎉</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 20,
    textAlign: 'center',
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
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  textoDesafio: {
    fontSize: 16,
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#43a047',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  feito: {
    marginTop: 10,
    color: '#1b5e20',
    fontWeight: 'bold',
  },
});
