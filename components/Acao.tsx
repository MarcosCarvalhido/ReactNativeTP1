import {Image, Modal, StyleSheet, Text, View, Pressable, Button, TouchableOpacity,TouchableHighlight} from 'react-native';
import {useState} from "react";
import CompraVenda from "@/components/CompraVenda";
export default function Acao({contaLogo,props}:any) {
    const [descricaoAberta, setDescricaoAberta] = useState(false)
    return (
            <TouchableHighlight onPress={()=> setDescricaoAberta(true)} underlayColor={'darkgray'} >
        <View  style={styles.acaoConteiner}>
            <Image style={styles.icone} source={{
                uri: `${contaLogo}`
            }}/>
            <view style={styles.contaConteinerExt} >
                <View style={styles.contaConteinerInt}>
                <Text> {props.symbol} </Text>
                <Text> ${props.close} </Text>

                </View  >
                <View style={styles.contaConteinerInt}>
                <Text> {"contaNome"} </Text>
                <Text> {"contaGanho"} </Text>

                </View>
                <Modal  visible={descricaoAberta} animationType="fade" onRequestClose={() => (!descricaoAberta)}>
                    <Button title={"Voltar"} color={"darkgray"} onPress={() => setDescricaoAberta(!descricaoAberta)}/>
                    <View style={styles.lista}>
                        <Text>nome: {props.symbol}</Text>
                        <Text>Valor Abertura: ${props.open}</Text>
                        <Text>Valor Max: ${props.high}</Text>
                        <Text>Valor Min: ${props.low}</Text>
                        <Text>Valor Final: ${props.close}</Text>
                        <Text>Volume: {props.volume}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} >
                        <CompraVenda/>
                    </TouchableOpacity>

                </Modal>
            </view>
        </View>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    lista:{
      display:'flex',
      flexDirection:'column',
    },
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
