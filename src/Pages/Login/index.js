import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Login() {
  return (
    <View style={styles.container}>
      <View animation='fadeInLeft'  style={styles.containerHeader}>
        <Text  style={styles.message}>Bem vindo(a)</Text>
      </View>
      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.titleForm}>Nome:</Text>
        <TextInput
          placeholder='Digite o seu nome...'
          style={styles.input}
        />
        

        <View style={styles.contBtn}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.titleButton}>
              Acessar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButtonRegistrar}>
              Pular
            </Text>
          </TouchableOpacity>
        </View>
        
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20
  },
  containerForm:{
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingStart: '5%',
    paddingEnd: '5%', 
    marginTop: 20
  },
  titleForm:{
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    height: 50,
    marginBottom:12, 
    fontSize: 16
  },
  buttonLogin: {
    backgroundColor: '#2C39FD',
    borderRadius:  50,
    paddingVertical: 8,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    width: '60%',
    
  },
  titleButton:{
    color: '#fff',
    fontSize: 20
  }, 
  titleButtonRegistrar:{
    marginTop: 30,
    fontSize: 18,
    color: '#a1a1a1'
  },
  contBtn:{
    alignItems: 'center'
  }
});
