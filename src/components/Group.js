import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Group extends React.Component {
    render() {
        return (
            <TouchableHighlight style={styles.container}>
                <View style={styles.button}>
                    <Icon name={this.props.iconName} size={70} />
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
            </TouchableHighlight> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width / 10) * 4,
        height: (Dimensions.get('window').width / 10) * 4,
        margin: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        textAlign: 'center'
    }
})