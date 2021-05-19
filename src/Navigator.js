import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import GroupList from './screens/GroupList'
import ActivityList from './screens/ActivityList'
import Menu from './screens/Menu'
import Auth from './screens/Auth'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const ActivityNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Grupos' component={GroupList} />
            <Stack.Screen name='Atividades' component={ActivityList} />
        </Stack.Navigator>
    )
}

const MenuNavigator = () => {
    return (
            <Tab.Navigator tabBarOptions={{ showLabel: false, style: styles.container }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName
                        let icon

                        switch(route.name) {
                            case 'Grupos Tab':
                                iconName = focused ? 'home' : 'home-outline'
                                icon = <Icon name={iconName} size={45} color='#222' />
                                break
                            case 'Minhas atividades':
                                iconName = focused ? 'calendar-month' : 'calendar-month-outline'
                                icon =  <Icon name={iconName} size={40} color='#222' />
                                break
                            case 'Perfil':
                                iconName = focused ? 'account' : 'account-outline'
                                icon =  <Icon name={iconName} size={45} color='#222' />
                                break
                            default:
                                break
                        }
                        return icon
                    }
                })}>
                <Tab.Screen name='Grupos Tab' component={ActivityNavigator} />
                <Tab.Screen name='Minhas atividades' component={GroupList} />
                <Tab.Screen name='Perfil' component={GroupList} />
            </Tab.Navigator>
    )
}

const ScreenNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' 
            drawerPosition='right' 
            drawerStyle={{
                backgroundColor: '#eee',
                height: 275,
                borderRadius: 10,
                borderColor: '#222',
                borderWidth: 1,
                elevation: 10,
            }}
            drawerContentOptions={{
                activeTintColor: 'rgba(111, 222, 552, 1)',
                labelStyle:{
                    color:'#222',
                    fontFamily:'Exo2-Medium',
                },
            }}
            drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name='Home' component={MenuNavigator} />
            <Drawer.Screen name='Configurações' component={GroupList} />
            <Drawer.Screen name='Contate-nos' component={GroupList} />
        </Drawer.Navigator>
    )
}

const AuthOrHome = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Auth Stack' component={Auth} />
            <Stack.Screen name='Home Stack' component={ScreenNavigator} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthOrHome />
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        elevation: 5,
        borderWidth: 1,
        borderColor: '#222'
    }
})