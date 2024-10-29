import {Button, Image, StyleSheet, Text, View} from 'react-native';
import ModalAcoes from "@/components/ModalAcoes";
export default function Cabecalho({usuario,imagemUrl}:any) {

    return (
        <View style={styles.cabecalho}>
            <View style={styles.conteiner}>

            <Image style={styles.icone} source={{
                uri: `${imagemUrl}`
            }}/>
                <View style={styles.conteinerInterno}>
                    <Text style={styles.boasvindas} >Ola,{usuario}</Text>896/
                    <Text style={styles.subtitulo} >seu <span style={styles.destaque}>Balanço</span>  </Text>
                </View>
                <ModalAcoes />
            </View>

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
        flexDirection: 'row',
        alignItems: 'center',
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
