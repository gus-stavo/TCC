import React, { Component } from 'react'
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import commonStyles from '../commonStyles'

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
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Aparência')}}>
                    <View style={[styles.clicavel, {marginTop: 15}]}>
                        <Icon name="white-balance-sunny" size={40}></Icon>
                        <Text style={styles.texto}>Aparência</Text>
                    </View>
                </TouchableOpacity>   
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Conta')}}>
                    <View style={styles.clicavel}>
                        <Icon name="account" size={40} color="#222" />
                        <Text style={styles.texto}>Conta</Text>
                    </View>
                </TouchableOpacity>   
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sobre')}}>
                    <View style={styles.clicavel}>
                        <Icon name="information-outline" size={40} color="#222" />
                        <Text style={styles.texto}>Sobre</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(111, 222, 552, 1)',
    },
    clicavel: {
        flexDirection: 'row',
        backgroundColor: commonStyles.cores.branco,
        borderWidth: commonStyles.buttons.borderWidth,
        borderRadius: commonStyles.buttons.borderRadius,
        height: 60,
        alignItems: 'center',
        shadowColor: commonStyles.cores.preto,
        shadowColor: commonStyles.cores.preto,
        shadowOffset: {
          width: commonStyles.buttons.shadowOffset.width,
          height: commonStyles.buttons.shadowOffset.height
        },
        shadowOpacity: commonStyles.buttons.shadowOpacity,
        shadowRadius: commonStyles.buttons.shadowRadius,
        elevation: commonStyles.buttons.elevation,
        marginBottom: 15,   
        paddingLeft: 12,
        marginHorizontal: 25
    },
    texto: {
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#222',
    },
})