import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryContainer: {
        width: '30%',
        height: '90%',
        backgroundColor: '#171515',
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25
    },
    imagelogo: {
         alignSelf: 'center',
         marginBottom: 15,

    },
    Inputs: {
        width: '90%',
        height: '15%',
        borderWidth: 1,
        borderColor: '#171515',
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'center',
        margin: 5,
    },
    textoinput: {
        fontSize: 20,
        color: 'white',
        marginLeft: 30,
        marginTop: 15,
        fontWeight: 'bold',
    },
    terceiroContainer: {
        width: '100%',
        height: 300,
    },

    // Eu sou um botão vermelho que escrito caucular
    bot: {
    backgroundColor: '#D32828',
    width: '90%',
    height: '15%',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    },
    textobotao: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
  });
