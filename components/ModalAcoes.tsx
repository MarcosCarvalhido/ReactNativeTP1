import {Button, StyleSheet, Text, View, Modal, TextInput} from 'react-native';
import {useState} from "react";



export default function ModalAcoes() {
    const [modalAberto,setModalAberto] = useState(false)
    return (
        <View style={styles.modal}>
            <Button title={'Minhas \n Transações'} color={"darkgray"} onPress={() => setModalAberto(true)}/>
            <Modal visible={modalAberto} animationType="fade" onRequestClose={() => (!modalAberto)}>
                <Button title={"Voltar"} color={"darkgray"} onPress={() => setModalAberto(!modalAberto)}/>
                <div style={styles.pesquisaConteiner}>
                    <TextInput style={styles.barraPesquisa} placeholder="Pesquise aqui..."/>
                    <Button color={"darkgray"} title={"pesquisar"}/>
                </div>
            </Modal>
            <view>

            </view>
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
        justifyContent: 'center',
        padding: 5,
    },
    barraPesquisa: {
        width: '50%',
        borderColor: 'black',
        borderWidth: 2,
    }
});
