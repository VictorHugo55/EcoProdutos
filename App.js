import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/screens/Cadastro'; 
import OndeComprar from './src/screens/OndeComprar'; 
import Home from './src/screens/Home';
import Catalogo from './src/screens/Catalogo';
import Dicas from './src/screens/Dicas';
import SobreScreen from './src/screens/Sobre';
import ClimaScreen from './src/screens/Clima';
import ListaLojas from './src/screens/ListaLojas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'EcoHome' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro de Produtos' }} />
        <Stack.Screen name="OndeComprar" component={OndeComprar} options={{ title: 'Onde Comprar' }} />
        <Stack.Screen name="Catalogo" component={Catalogo} options={{ title: 'Catálogo Verde' }} />
        <Stack.Screen name="Dicas" component={Dicas} options={{ title: 'Dicas Ecológicas' }} />
        <Stack.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre o Projeto' }} />
        <Stack.Screen name="Clima" component={ClimaScreen} options={{ title: 'Clima Sustentável' }} />
        <Stack.Screen name="ListaLojas" component={ListaLojas} options={{ title: 'Lista de Lojas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
