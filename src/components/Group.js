import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '../commonStyles'

export default class Group extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => { this.props.openActivities() }}>
                <View style={styles.button}>
                    <Icon name={this.props.iconName} size={70} />
                    <Text style={styles.title}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 150,
        marginHorizontal: 8,
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: commonStyles.cores.preto,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: commonStyles.cores.branco,
        borderRadius: 25,
        elevation: 10
    },
    button: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: commonStyles.cores.preto
    },
    title: {
        marginTop: 5,
        fontSize: 17,
        fontFamily: 'Exo2-SemiBold',
        color: commonStyles.cores.preto,
        textAlign: 'center'
    }
})