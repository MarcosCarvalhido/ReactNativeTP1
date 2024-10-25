import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import ModalAcoes from "@/components/ModalAcoes";



export default function Cabecalho({usuario,imagemUrl}:any) {

    return (
        <View style={styles.cabecalho}>
            <div style={styles.conteiner}>

            <Image style={styles.icone} source={{
                uri: `${imagemUrl}`
            }}/>
                <div style={styles.conteinerInterno}>
                <Text style={styles.boasvindas} >Ola,{usuario}</Text>
                 <Text style={styles.subtitulo} >seu <span style={styles.destaque}>Balanço</span>  </Text>
                </div>

                <ModalAcoes />
                </div>

        </View>
    );
}

const styles = StyleSheet.create({
    boasvindas: {
        fontSize: 20,
        color: 'white',
    },
    icone:{
        borderRadius: 50,
        height: 70,
        width: 70,
        marginRight: 5,
    },
    conteiner: {
        display: 'flex',
        justifyContent: "space-around"
    },
    subtitulo: {
        fontSize: 30,
        color: 'white',
    },
    destaque: {
        fontWeight: 'bold',
    },
    conteinerInterno: {
        display: 'flex',
        flexDirection: "column",
    },
    cabecalho: {
        borderColor: 'darkgray',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        margin: 5
    }
});
