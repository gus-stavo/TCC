import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import commonStyles from '../commonStyles'

import Header from '../components/Header'

const initialState = {
    tema: '',
    title: '',
    desc: '',
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
            <View>
                <Header name={this.props.route.name} openDrawer={() => { this.openDrawer() }} />
                <View style={styles.container}>
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

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.cores.azul,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        backgroundColor: commonStyles.cores.branco,
        width: commonStyles.containerWhite.width,
        height: commonStyles.containerWhite.height,
        borderWidth: commonStyles.containerWhite.borderBottomWidth,
        borderRadius: commonStyles.containerWhite.borderRadius,
        elevation: commonStyles.containerWhite.elevation
    },
    title: {
        fontSize: 50,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20,
        fontFamily: "Exo2-SemiBoldItalic",
        textAlign: 'center',
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
        justifyContent: 'center',
        backgroundColor: commonStyles.cores.branco,
        marginBottom: 15,
        margin: 20,
        marginHorizontal: commonStyles.buttons.marginHorizontal,
        borderWidth: commonStyles.buttons.borderWidth,
        borderRadius: commonStyles.buttons.borderRadius,
        height: 60,
        justifyContent: 'center',
        shadowColor: commonStyles.cores.preto,
        shadowColor: commonStyles.cores.preto,
        shadowOffset: {
            width: commonStyles.buttons.shadowOffset.width,
            height: commonStyles.buttons.shadowOffset.height
        },
        shadowOpacity: commonStyles.buttons.shadowOpacity,
        shadowRadius: commonStyles.buttons.shadowRadius,
        elevation: commonStyles.buttons.elevation
    },
    titleMessage: {
        width: commonStyles.buttons.width,
        fontSize: 25,
        marginHorizontal: commonStyles.buttons.marginHorizontal,
        borderBottomWidth: 0.5,
        fontFamily: 'Exo2-Medium',
    },
    message: {
        marginTop: 25,
        marginHorizontal: commonStyles.buttons.marginHorizontal,
        backgroundColor: commonStyles.cores.branco,
        marginBottom: 15,        
        borderWidth: commonStyles.buttons.borderWidth,
        borderRadius: commonStyles.buttons.borderRadius,
        height: 180,
        justifyContent: 'center',
        shadowColor: commonStyles.cores.preto,
        shadowColor: commonStyles.cores.preto,
        shadowOffset: {
            width: commonStyles.buttons.shadowOffset.width,
            height: commonStyles.buttons.shadowOffset.height
        },
        shadowOpacity: commonStyles.buttons.shadowOpacity,
        shadowRadius: commonStyles.buttons.shadowRadius,
        elevation: commonStyles.buttons.elevation,
        fontSize: 20,         
        width: commonStyles.buttons.width,
        padding: 10,
        fontFamily: 'Exo2-Medium',
        textAlignVertical: 'top'

    },
    button: {
        marginHorizontal: commonStyles.exitButton.marginHorizontal,
        marginTop: 25,
        marginBottom: 0,
        borderWidth: 0.5,
        borderRadius: 10,
        height: 40,
        backgroundColor: commonStyles.cores.azul,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: commonStyles.cores.preto,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonText: {
        color: commonStyles.cores.preto,
        fontSize: 20,
        fontFamily: 'Exo2-Medium'
    }
})