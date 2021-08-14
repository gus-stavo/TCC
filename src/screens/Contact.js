import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

const initialState = {
        tema:'',
        title:'',
        desc:'',
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    render() {
        return (          
            <View style={styles.background}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Contate-nos</Text>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                    <TouchableOpacity>
                        <View>
                            <Text>
                                   
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(111, 222, 552, 1)'
    },
    title: {
        fontSize: 70,
        marginBottom: 10,
        fontFamily: "Exo2-SemiBoldItalic",
        color: '#222',
    },
    formContainer: {
        backgroundColor: '#eee',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#222',
        elevation: 8,
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#222',
        marginBottom: 10,
        fontFamily: 'Exo2-Medium'
    },
    input: {
        marginTop: 10,
    },
    button: {
        backgroundColor: 'rgba(111, 222, 552, 1)',
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#222',
        width: 150,
        borderWidth: 1,
        elevation: 5
    },
    buttonText: {
        color: '#222',
        fontSize: 20,
        fontFamily: 'Exo2-Medium'
    },
    textButtons: {
        alignItems: 'center',
        
    },
    textButton: {
        alignItems: 'center',
        marginTop: 50
        
    },
    textButtonTitle: {
        fontSize: 20,
        fontFamily: 'Exo2-Medium',
        color: '#222',
    }  
})