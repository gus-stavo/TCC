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
        width: '50%',
        height: Dimensions.get('window').width / 2,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        fontFamily: 'Exo2-SemiBold',
        textAlign: 'center'
    }
})