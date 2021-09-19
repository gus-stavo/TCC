import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import commonStyles from '../commonStyles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {

    const logout = () => {
        Alert.alert('Sair', 'Deseja sair?', 
        [
            {
                text: 'Não',
                onPress: () => {}
            },
            {
                text: 'Sim',
                onPress: () => {
                    props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'Auth Stack',
                                },
                            ],
                        })
                    )
                } 
            }
        ])
    }

    return (
        <DrawerContentScrollView>
            <View style={styles.container}>
                <View >
                    <Avatar rounded title='GS' size='medium' style={styles.avatar} titleStyle={{ color: '#eee' }} />
                </View>
                <View style={styles.infos}>
                    <View>
                        <Text style={styles.name}>Gustavo Stefano</Text>
                    </View>
                    <TouchableOpacity style={styles.icon} onPress={logout}>
                        <Icon name='exit-to-app' size={35} color='#222' />
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
        borderColor: commonStyles.cores.preto,
        backgroundColor: commonStyles.cores.branco
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
        backgroundColor: '#222',
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