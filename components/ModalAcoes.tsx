import {Button, StyleSheet, Text, View, Modal, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {useContext, useState} from "react";
import Acao from "@/components/Acao";
import {APIContext} from "@/components/navigation/APIContext";
export default function ModalAcoes() {
    const [modalAberto,setModalAberto] = useState(false)
    // const {acoes,chamarAPI,banana}: any  = useContext(APIContext)

    const [acoes, setAcoes] = useState("No data")
    async function chamarAPI() :Promise<void> {
        const key = "4f489eb2f31d979d122952933afb26ad"
        const url = `https://api.marketstack.com/v1/eod?access_key=${key}&symbols=AAPL`
        const options = {
            method: "GET",
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setAcoes(result)
            console.log(result.data);
            console.log("result",result.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <View style={styles.modal}>

            <Button title={'Minhas \n Transações'} color={"darkgray"} onPress={() => setModalAberto(true)}/>
            <Modal visible={modalAberto} animationType="fade" onRequestClose={() => (!modalAberto)}>
                <Button title={"Voltar"} color={"darkgray"} onPress={() => setModalAberto(!modalAberto)}/>
                <TouchableOpacity activeOpacity={0.5} onPress={chamarAPI}>
                    <Text style={{color: 'gray'}}>Atualizar Dados</Text>
                </TouchableOpacity>
                <View style={styles.pesquisaConteiner}>
                    <TextInput style={styles.barraPesquisa} placeholder="Pesquise aqui..."/>
                    <Button color={"darkgray"} title={"pesquisar"}/>
                </View>
                <FlatList  style={styles.acoesLista} data={acoes} renderItem={(item)=> <Acao props={item} contaLogo={'https://cdn-icons-png.flaticon.com/512/8347/8347452.png'}/>}/>
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
