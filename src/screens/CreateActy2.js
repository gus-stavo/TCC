import React, { Component, state } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const initialState = {
    localizacao:'',
    latitude:0,
    longitude:0
}


export default class Contact extends Component {

    state = {
        ...initialState
    }

    render() {

        return (
            <View style={styles.containerTop}>
                <View style={styles.containerBotTittle}>
                    <View style={styles.container1}>
                        <Text style={styles.EditableText}>Selecione sua Localização</Text>
                        <TextInput style={styles.inputAtividade} placeholder="Digite sua localização:" />
                    </View>
                    <View style={styles.avatarContainer}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                        >
                               <Marker
                                    coordinate={{ latitude : -23.95214 , longitude : -46.29811 }}
                                    title={'marker.title'}
                                    description={'marker.description'}
                                /> 
                        </MapView>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.editedProfileButton} onPress={() => { this.props.navigation.navigate('Etapa 3') }}>
                            <Text style={styles.buttonText}>Proxima</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00D9E7',
    },
    container1: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBotTittle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        height: '85%',
        width: '90%',
        padding: 20,
    },
    teste: {
        marginTop: 100,
        padding: 30
    },
    avatarContainer: {
        width: '90%',
        height: '60%',
        padding: 30,
    },
    avatar: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    problemLabel: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputAtividade: {
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'solid',
        width: 300,
        height: 40,
        padding: 10
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        borderBottomWidth: 1,
        width: 300,
        padding: 10,
        color: 'black'
    },
    EditableText: {
        fontSize: 20,
        borderBottomWidth: 1,
        width: 300,
    },
    editedProfileButton: {
        padding: 10,
        width: 180,
        borderRadius: 16,
        borderWidth: 2,
        backgroundColor: "#83a4d4",
        alignItems: 'center',
    },
    containerButton: {
        marginTop: 10
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
})