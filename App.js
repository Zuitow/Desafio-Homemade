import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { estilos } from "./src/styles/Styles";

export default function App() {
  // Consts dos textos
  const inputalcool = "Álcool (preço por litro).";
  const inputgasolina = "Gasolina (preço por litro).";
  const textpribot = "Calcular";
  const textsecbot = "Calcular Novamente";
  

  // Parametros para usar a visibilidade e usar o Modal
  const [visible, setVisible] = useState(false);
  visModal = (x) => {
    if (!visible) {
      setVisible(x);
    } else {
      setVisible(x);
    }
  };
  // Funções
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [combustivel, setCombustivel] = useState('');


  const handlePress = () => {
    visModal(true);
  
    const resultado = num1 / num2;
    const combustivel = resultado < 0.7 ? 'Álcool' : 'Gasolina';

    const compensa = "Compensa usar " + combustivel;
    setCombustivel(compensa);
    console.log(resultado)
  };
  return (
    //Primeiro Container
    <View style={estilos.container}>
      {/* Container que é a caixa padrão */}

      <View style={estilos.secondaryContainer}>
        <Image
          style={estilos.imagelogo}
          source={require("./src/assets/images/logo.png")}
        />
        <Text style={estilos.text}>Qual a Melhor Opção?</Text>

        {/* Container que segura os inputs */}

        <View style={estilos.terceiroContainer}>
          <Text style={estilos.textoinput}>{inputalcool}</Text>
          <TextInput value={num1} style={estilos.Inputs} keyboardType="numeric"  onChangeText={setNum1}/>
          <Text style={estilos.textoinput}>{inputgasolina}</Text>
          <TextInput value={num2} style={estilos.Inputs}  keyboardType="numeric" onChangeText={setNum2}/>

          <TouchableOpacity onPress={() =>  handlePress()} style={estilos.bot}>
            <Text style={estilos.textobotao}>{textpribot}</Text>
          </TouchableOpacity>
        </View>
        <Modal transparent={true} animationType="fade" visible={visible}>
          {/* Segundo container2 pois é a segunda página */}
          <View style={estilos.secondaryContainer2}>
            <Image
              style={estilos.imagelogo}
              source={require("./src/assets/images/gas.png")}
            />
            <Text style={estilos.text2}>{combustivel}</Text>
            <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> Com os Preços:</Text>
            <Text style={estilos.text3}>Álcool: R$ {num1}</Text>
            <Text style={estilos.text3}> Gasolina: R$ {num2}</Text>
            <TouchableOpacity onPress={() =>  visModal(false)} style={estilos.bot2}>
            <Text style={estilos.textobotao2}>{textsecbot}</Text>
          </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}