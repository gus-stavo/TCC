import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Icon name='navicon' size={50} /> 
                    </TouchableOpacity>
                </View>    
            </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerTitle: {
        justifyContent: 'center',
        flex: 1,
        
    },
    title:{
        color: '#000',
        fontFamily: 'Exo2-SemiBold',
        fontSize: 30,
        padding: 5,
        marginLeft: 6
    },
    button: {
        padding: 5
    },
})