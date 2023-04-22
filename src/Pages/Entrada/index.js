import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Entrada() {
  const navigation = useNavigation()
  
  const acessar = () =>{
    navigation.reset({
      index: 0,
      routes: [{name:'Home'}]
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.conteinerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../Assets/todo.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>


      <Animatable.View  
          delay={600}
          animation='fadeInUp'style={styles.conteinerAcessar}>
         <Text style={styles.title}>Monitore e organize suas tarefas!</Text>
         <Text style={styles.titleLogin}>Aperte em acessar para continuar</Text>

         <TouchableOpacity style={styles.button}
          onPress={acessar}
         >
            <Text style={styles.titleBtn}>
              Acessar
            </Text>
         </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  },
  conteinerLogo:{
    flex: 2,
    justifyContent:'center',
    alignItems: 'center'
  },
  img:{
    width: 200
  },
  conteinerAcessar: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: '5%',
    alignItems: 'center'
  },
  title:{
    marginTop: 20,
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold'
  }, 
  titleLogin: {
    color: '#a1a1a1',
    paddingTop: 20
  },
  button:{
    position: 'absolute',
    backgroundColor: '#2C39FD',
    borderRadius:  50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '20%',
    alignItems:'center',
    height:60,
    justifyContent:'center'
  },
  titleBtn:{
    color: '#fff',
    fontSize: 20
  }
});
