import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity} from "react-native";


export default function NovaTarefa(){
    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.contInput}>
                <TextInput style={styles.inputTitle} placeholder="Informe o titulo..."></TextInput>
                <TextInput multiline={true}
                numberOfLines={10}
                style={styles.input} placeholder="Discreva a tarefa..."></TextInput>
                <TouchableOpacity  style={styles.btn}>
                    <Text  style={styles.textBtn}>
                        Criar Tarefa
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex: 1
    },
    contInput:{
        height: 420,
        width: '90%',
        backgroundColor: '#fff',
        marginLeft: '5%',
        borderRadius:20,
        justifyContent: 'center',
        marginTop: 40
    },
    inputTitle:{
        height: 55,
        width: '90%',
        marginLeft: '5%',
        backgroundColor: '#fbfbfb',
        paddingLeft: 20,
        borderRadius: 15
    },
    input:{
        height:200,
        backgroundColor: '#fbfbfb',
        marginLeft: '5%',
        width: '90%',
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 15,
        borderRadius: 20,
    },
    btn:{
        backgroundColor: '#2C39FD',
        width: '50%',
        height: 55,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20
    },
    textBtn: {
        color:'#fff',
        fontSize: 18
    }
})