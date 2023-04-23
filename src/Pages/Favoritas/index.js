import React from "react";
import { View, StyleSheet, Text, SafeAreaView} from "react-native";


export default function Favoritas(){
    return(
        <SafeAreaView style={styles.Container}>
            <Text>Favoritas</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex: 1
    }
})