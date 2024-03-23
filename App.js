import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { estilos } from './src/styles/Styles';



export default function App() {
  // Consts dos textos
  const inputalcool = "Álcool (preço por litro)."
  const inputgasolina = "Gasolina (preço por litro)."
  const textpribot = "Calcular"
  return (
    //Primeiro Container
    <View style={estilos.container}>

      {/* Container que é a caixa padrão */}

      <View style={estilos.secondaryContainer}>
        <Image style={estilos.imagelogo} source={require('./src/assets/images/logo.png')} />
        <Text style={estilos.text}>Qual a Melhor Opção?</Text>

        {/* Container que segura os inputs */}

        <View style={estilos.terceiroContainer}>
          <Text style={estilos.textoinput}>{inputalcool}</Text>
          <TextInput style={estilos.Inputs} />
          <Text style={estilos.textoinput}>{inputgasolina}</Text>
          <TextInput style={estilos.Inputs} />

          <TouchableOpacity style={estilos.bot}>
            <Text style={estilos.textobotao}>{textpribot}</Text>
          </TouchableOpacity>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

