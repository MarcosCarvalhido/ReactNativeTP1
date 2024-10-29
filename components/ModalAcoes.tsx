import {Button, StyleSheet, Text, View, Modal, TextInput} from 'react-native';
import {useState} from "react";
import Acao from "@/components/Acao";
export default function ModalAcoes() {
    const [modalAberto,setModalAberto] = useState(false)
    return (
        <View style={styles.modal}>
            <Button title={'Minhas \n Transações'} color={"darkgray"} onPress={() => setModalAberto(true)}/>
            <Modal visible={modalAberto} animationType="fade" onRequestClose={() => (!modalAberto)}>
                <Button title={"Voltar"} color={"darkgray"} onPress={() => setModalAberto(!modalAberto)}/>
                <View style={styles.pesquisaConteiner}>
                    <TextInput style={styles.barraPesquisa} placeholder="Pesquise aqui..."/>
                    <Button color={"darkgray"} title={"pesquisar"}/>
                </View>
                <View style={styles.acoesLista}>
                    <Acao contaSigla={'APPL'} contaNome={'Apple Inc'} ContaValor={'191,24'} contaGanho={'$2,90(1,53%)'} contaLogo={'https://yt3.googleusercontent.com/M6YRDTT4TuycM6WeCoAC3UBre6Yu_i7RnK6bIs8ysWM1PBJFBvA9uOryoK_kF_4UeHKvTpPdLCY=s900-c-k-c0x00ffffff-no-rj'}/>
                </View>
            </Modal>
        </View>
);
}

const styles = StyleSheet.create({
    modal: {
        height: "100%",
        display: 'flex',
        justifyContent: 'center'
    },
    pesquisaConteiner:{
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    barraPesquisa: {
        width: '50%',
        borderColor: 'black',
        borderWidth: 2,
    },
    acoesLista:{
        display: "flex",
        flexDirection: 'column',
    }

});
