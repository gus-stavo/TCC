import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker'

import Header from '../components/Header'
import commonStyles from '../commonStyles'

const initialState = {
        tema:'',
        title:'',
        desc:'',
}

export default class Contact extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    state = {
        ...initialState
    }

    render() {
        return (          
            <View style={styles.container}>
                <View>
                    <Header name={this.props.route.name} openDrawer={() => {this.openDrawer()}} />
                </View>
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>Contate-nos</Text>
                    <Text style={styles.subtitle}>Sua mensagem será analisada em até 24 horas.</Text>
                    <View style={styles.picker}> 
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.tema}
                            onValueChange={(tema) =>
                                this.setState({ tema })
                            }>   
                            <Picker.Item label="Escolha um tópico" value="" />
                            <Picker.Item label="Sugestão de grupo" value="Futebol" />
                            <Picker.Item label="Erro no aplicativo" value="Pesca" />
                            <Picker.Item label="Outros" value="Caminhada" />
                        </Picker>
                    </View>
                    <TextInput style={styles.titleMessage} placeholder="Título:"></TextInput>
                    <TextInput style={styles.message} placeholder="Descreva seu problema:" multiline numberOfLines={10}></TextInput>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Enviar 
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.cores.azul,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      },
      mainContainer: {
        backgroundColor: commonStyles.cores.branco,
        width: '87%',
        height: '92%',
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 50,
        marginBottom: 10,
        marginHorizontal: 20,
        fontFamily: "Exo2-SemiBoldItalic",
        color: commonStyles.cores.preto,
    },
    subtitle: {
        marginHorizontal: 20,
        fontSize: 25,
        fontFamily: 'Exo2-Medium',
        textAlign: 'center',
        color: commonStyles.cores.preto,
        marginBottom: 10,
    },
    picker: {
        borderWidth:1,
        borderRadius:20,
        borderStyle:'solid',
        width: '80%',
        justifyContent: 'center',
        height: 40,
    },
    titleMessage: {
        width: '80%',
        fontSize: 25,
        borderBottomWidth:1,
        borderStyle:'solid',
        fontFamily: 'Exo2-Medium',
    },
    message: {
        marginTop: 20,
        fontSize: 20,
        borderWidth:1,
        borderRadius:20,
        borderStyle:'solid',
        width: '80%',
        padding: 10,
        fontFamily: 'Exo2-Medium',
        textAlignVertical: 'top'

    },
    button: {
        backgroundColor: commonStyles.cores.azul,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: commonStyles.cores.preto,
        width: 150,
        borderWidth: 1,
        elevation: 5
    },
    buttonText: {
        color: commonStyles.cores.preto,
        fontSize: 20,
        fontFamily: 'Exo2-Medium'
    }
})