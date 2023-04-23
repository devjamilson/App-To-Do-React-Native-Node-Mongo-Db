import React from "react"
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"



export default function ItemView({item}){
    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.Container} onPress={()=>{navigation.navigate('VerTarefa')}}>
            <View style={styles.contTitle}>
                <Text style={styles.title}>{item.titulo}</Text>
                <TouchableOpacity>
                    <FontAwesome5 name="check" size={20} color="#084fd1" />
                </TouchableOpacity>
            </View>
            <Text style={styles.descricao}>{item.descricao}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
       height: 90,
       width: '90%',
       backgroundColor: '#fff',
       marginTop: '4%',
       alignSelf: 'center',
       borderRadius: 15, 
       padding: '5%'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    descricao:{
        color: '#a1a1a1',
        marginTop: 5
    },
    contTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})