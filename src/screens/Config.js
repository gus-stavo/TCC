import React, { Component } from 'react'
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../components/Header'

export default class Configs extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Header name={this.props.route.name} openDrawer={() => {this.openDrawer()}} />
                </View>
                <View style={styles.containerBox}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Aparência')}} style={[styles.clicavel, {marginTop: 20}]}>
                        <Icon name="white-balance-sunny" size={40}></Icon>
                        <Text style={styles.texto}>Aparência</Text>
                    </TouchableOpacity>   
                </View>

                <View style={styles.containerBox}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Conta')}} style={styles.clicavel}>
                        <Icon name="account" size={40} color="#222" />
                        <Text style={styles.texto}>Conta</Text>
                    </TouchableOpacity>   
                </View>

                <View style={styles.containerBox}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sobre')}} style={styles.clicavel}>
                        <Icon name="information-outline" size={40} color="#222" />
                        <Text style={styles.texto}>Sobre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: '100%',
        //height: '100%',
        backgroundColor: 'rgba(111, 222, 552, 1)',
        //backgroundColor: '#EEE',
    },
    clicavel: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#EEE',
        borderWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 10,
        height: 80,
        alignItems: 'center',
        paddingLeft: 12,
        marginTop: 10,
        //width: '60%',
        //marginLeft: 'auto',
        //marginRight: 'auto',

        
    },
    containerBox: {
        
        
        
    },
    texto: {
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#222',
    }
})