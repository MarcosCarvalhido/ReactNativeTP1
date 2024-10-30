import {
    Image,
    Modal,
    StyleSheet,
    Text,
    View,
    Pressable,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TextInput
} from 'react-native';
import {useState} from "react";
import {number} from "prop-types";
export default function CompraVenda() {
    const [CVAberta, setCVAberta] = useState(false)
    return (
            <View>
                <TouchableHighlight onPress={()=> setCVAberta(true)} underlayColor={'green'} >
                    <Text>Compra e venda</Text>
                    </TouchableHighlight>
                <Modal visible={CVAberta} animationType="fade" onRequestClose={() => (!CVAberta)}>
                    <Button title={"Voltar"} color={"darkgray"} onPress={() => setCVAberta(!CVAberta)}/>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text>Comprar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text>Vender</Text>
                    </TouchableOpacity>
                    <view>
                        <Button title={"-"}/>
                        <TextInput keyboardType={"numeric"} />
                        <Button title={"+"}/>
                        <Text> Total:  </Text>

                    </view>
                </Modal>
            </View>
    );
}

const styles = StyleSheet.create({

});
