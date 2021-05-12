import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Gravatar } from 'react-native-gravatar'

import Icon from 'react-native-vector-icons/Ionicons' //ios-exit-outline

const logout = () => {
    Alert.alert('Sair', 'Deseja sair?')
}

export default props => {
    return (
        <DrawerContentScrollView>
            <View style={styles.container}>
                <View >
                    <Gravatar style={styles.avatar} options={{ email: 'gustavomlstefano@gmail.com', secure: true }} />
                </View>
                <View style={styles.infos}>
                    <View>
                        <Text style={styles.name}>Gustavo Stefano</Text>
                    </View>
                    <TouchableOpacity style={styles.icon} onPress={logout}>
                        <Icon name='ios-exit-outline' size={35} color='#222' />
                        <Text style={styles.iconText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: 'rgba(111, 222, 552, 1)',
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    infos: {
        flex:1,
        alignItems: 'center',
        marginTop: 15,
        marginRight: 10

    },
    name: {
        fontFamily: 'Exo2-SemiBold',
        color: '#222',
        fontSize: 20

    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    iconText: {
        fontFamily: 'Exo2-SemiBold',
        color: '#222',
        marginLeft: 10,
        fontSize: 15
    }  
})