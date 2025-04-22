import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function Cadastro() {
    const [nomeProduto, setNomeProduto] = useState("")
    const [precoProduto, setPrecoProduto] = useState()
    const [listaProdutos, setListaProdutos] = useState([])
    const [produtoEditado, setProdutoEditado] = useState(null)

    useEffect(() => {
        buscarDados()
    }, [])

    async function salvar() {
        Keyboard.dismiss()
        let produtos = []

        if (await AsyncStorage.getItem("PRODUTOS") != null) {
            produtos = JSON.parse(await AsyncStorage.getItem("PRODUTOS"))
        }

        if (produtoEditado) {
            //Atualizar o produto existente
            produtos[produtoEditado.index] = { nome: nomeProduto, preco: precoProduto }
        } else {
            produtos.push({ nome: nomeProduto, preco: precoProduto })
        }



        //Salvado os dados no Async Storage
        await AsyncStorage.setItem("PRODUTOS", JSON.stringify(produtos))

        alert(produtoEditado ? "PRODUTO ATUALIZADO" : "PRODUTO CADASTRADO")

        setProdutoEditado(null)


        //Limpando formulário
        setNomeProduto('')
        setPrecoProduto('')

        buscarDados()
    }

    async function buscarDados() {
        const p = await AsyncStorage.getItem("PRODUTOS")
        setListaProdutos(JSON.parse(p))
    }

    async function deletarProduto(index) {
        //console.log(index) //Verificando o index que será passado
        const tempDados = listaProdutos
        const dados = tempDados.filter((item, ind) => {
            return ind !== index
        })

        setListaProdutos(dados)//Atualizado o estado listaProdutos
        await AsyncStorage.setItem("PRODUTOS", JSON.stringify(dados)) // Atualiza o banco sem o item excluido
    }

    function editarProduto(index) {
        const produto = listaProdutos[index]
        setNomeProduto(produto.nome)
        setPrecoProduto(produto.preco)
        setProdutoEditado({ index })//Definindo qual produto a ser editado
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/home-eco.png')} style={styles.cardImage} />
            <Text style={{
                fontSize: 28,
                fontWeight: '900',
                color: '#1B5E20',
                marginBottom: 20,
                textTransform: 'uppercase',
                textShadowColor: '#A5D6A7',
                textShadowOffset: { width: 1, height: 2 },
                textShadowRadius: 4,
                letterSpacing: 1,
            }}>Cadastro</Text>
            <TextInput
                placeholder='Digite o nome do produto'
                style={styles.input}
                value={nomeProduto}
                onChangeText={(value) => setNomeProduto(value)}
            />
            <TextInputMask
                placeholder='Digite o preço do produto'
                style={styles.input}
                type='money'
                value={precoProduto}
                onChangeText={(value) => setPrecoProduto(value)}
            />
            <TouchableOpacity style={styles.btn} onPress={salvar}>
                <Text style={{
                    color: "white", fontSize: 18,
                    fontWeight: 'bold',
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                }}>{produtoEditado ? "ATUALIZAR" : "CADASTRAR"}</Text>
            </TouchableOpacity>

            {/* {Botão para buscarDados} */}
            <TouchableOpacity style={styles.btn} onPress={buscarDados}>
                <Text style={{ color: "white" }}>BUSCAR DADOS</Text>
            </TouchableOpacity>

            <FlatList
                data={listaProdutos}
                renderItem={({ item, index }) => {
                    if (!item || !item.nome) return null;// Garante que a FlatList só renderize se as propriedades for diferenete nulo.
                    return (
                        <View style={styles.listFlat}>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#2E7D32',
                                    marginBottom: 4,
                                    letterSpacing: 0.5,
                                }}>Nome:{item.nome} - <Text style={{
                                    fontSize: 16,
                                    color: '#388E3C',
                                    fontStyle: 'italic',
                                }}>Preco:{item.preco}</Text></Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                {/* Botão Excluir */}
                                <TouchableOpacity
                                    style={styles.btnExcluir}
                                    onPress={() => deletarProduto(index)}
                                >
                                    <Text style={styles.btnSmallText}>Excluir</Text>
                                </TouchableOpacity>

                                {/* Botão Editar */}
                                <TouchableOpacity
                                    style={styles.btnEditar}
                                    onPress={() => editarProduto(index)}
                                >
                                    <Text style={styles.btnSmallText}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )
                }}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F5E9', // tom ainda mais claro e vibrante
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#66BB6A',
        backgroundColor: '#ffffff',
        height: 55,
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 16,
        marginTop: 12,
        fontSize: 16,
        color: '#1B5E20',
        shadowColor: '#66BB6A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        width: 200,
        height: 150,
        marginRight: 10
      },
    btn: {
        backgroundColor: '#43A047',
        height: 55,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    btnText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    listFlat: {
        width: 350,
        backgroundColor: '#ffffff',
        borderColor: '#A5D6A7',
        borderWidth: 2,
        borderRadius: 20,
        padding: 16,
        marginTop: 12,
        shadowColor: '#388E3C',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        transform: [{ scale: 1 }],
        alignItems: 'center'
    },
    listText: {
        color: '#2E7D32',
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnExcluir: {
        flex: 1,
        backgroundColor: '#E53935',
        borderRadius: 14,
        alignItems: 'center',
        paddingVertical: 10,
        marginRight: 5,
        marginTop: 5,
        elevation: 2,
    },
    btnEditar: {
        flex: 1,
        backgroundColor: '#FB8C00',
        borderRadius: 14,
        alignItems: 'center',
        paddingVertical: 10,
        marginLeft: 5,
        marginTop: 5,
        elevation: 2,
    },
    btnSmallText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

