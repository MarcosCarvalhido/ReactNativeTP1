import {Image, StyleSheet, Text, View} from 'react-native';
export default function Acao({contaLogo,contaSigla,contaNome,ContaValor,contaGanho}:any) {

    return (
        <View  style={styles.acaoConteiner}>
            <Image style={styles.icone} source={{
                uri: `${contaLogo}`
            }}/>
            <View style={styles.contaConteinerExt}>
                <View style={styles.contaConteinerInt}>
                <Text> {contaSigla} </Text>
                <Text> ${ContaValor} </Text>

                </View  >
                <View style={styles.contaConteinerInt}>
                <Text> {contaNome} </Text>
                <Text> {contaGanho} </Text>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contaConteinerInt:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contaConteinerExt:{
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    icone:{
        borderRadius: 50,
        height: 70,
        width: 70,
        marginRight: 5,
    },
    acaoConteiner:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    }
});
