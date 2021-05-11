import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Group extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {this.props.openActivities()}}>
                <View style={styles.button}>
                    <Icon name={this.props.iconName} size={70} color='#222' />
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
            </TouchableOpacity> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width / 10) * 4,
        height: (Dimensions.get('window').width / 10) * 4,
        margin: 10,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 25,
        elevation: 10
    },
    button: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 5,
        fontSize: 15,
        fontFamily: 'Exo2-SemiBold',
        color: '#222',
        textAlign: 'center'
    }
})