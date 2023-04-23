import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemView from '../../Components/item'
import { useNavigation } from '@react-navigation/native';



const dados = [
  {
    'id': 0,
    'titulo': 'Estudar Biologia',
    'descricao': 'Estudar briofitas, pteridoftas'
  },
  {
    
    'id': 1,
    'titulo': 'Ir a academia',
    'descricao': 'Treino de Costa'
  },
  {
    
    'id': 2,
    'titulo': 'Começar o projeto',
    'descricao': 'Analise de requisitos'
  },
  {
    
    'id': 3,
    'titulo': 'Montar os carnês',
    'descricao': 'Montagem dos carnês'
  },
  {
    
    'id': 4,
    'titulo': 'Estudar Física',
    'descricao': 'Estudar Eletromagnetismo'
  },
  {
    
    'id': 5,
    'titulo': 'Redação',
    'descricao': 'Estudar estrutura'
  },
  {
    
    'id': 6,
    'titulo': 'Montar os carnês',
    'descricao': 'Montagem dos carnês'
  },
  {
    
    'id': 7,
    'titulo': 'Estudar Física',
    'descricao': 'Estudar Eletromagnetismo'
  },
  {
    
    'id': 8,
    'titulo': 'Redação',
    'descricao': 'Estudar estrutura'
  }

]

export default function Tarefas() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
         <Text style={styles.title}>
           Todas as tarefas
         </Text>
      </View>
      <FlatList  
        data={dados}  
        keyExtractor={item => item.titulo}  
        renderItem={({item})=> <ItemView item={item} />}  
        style={styles.scroll}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroll:{
    width: '100%'
  },
  containerTitle:{
    height: 60
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  }

});
