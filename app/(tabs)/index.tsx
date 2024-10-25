import {StyleSheet, Text, View} from 'react-native';
import Cabecalho from "@/components/Cabecalho";
import ModalAcoes from "@/components/ModalAcoes";



export default function HomeScreen() {
  return (
        <View style={styles.view}>
            <Text style={styles.titulo} >TP1 - React Native</Text>
            <Cabecalho usuario={"Marcos"} imagemUrl={'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-cat-groom-nationalgeographic-1031934.jpg?w=1600'}></Cabecalho>
        </View>
  );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    view: {
        backgroundColor: "black",
        height: '100%',
    }
});
