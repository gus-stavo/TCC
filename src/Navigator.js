import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'

import GroupList from './screens/GroupList'
import ActivityList from './screens/ActivityList'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const ActivityNavigator = props => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Grupos' component={GroupList} />
            <Stack.Screen name='Atividades' component={ActivityList} />
        </Stack.Navigator>
    )
}

const MenuNavigator = props => {
    return (
            <Tab.Navigator tabBarOptions={{ showLabel: false, style: styles.container }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let icon

                        switch(route.name) {
                            case 'Grupos':
                                iconName = focused ? 'home' : 'home-outline'
                                icon = <Icon1 name={iconName} size={50} color='#222' />
                                break
                            case 'Minhas atividades':
                                iconName = focused ? 'calendar' : 'calendar-outline'
                                icon =  <Icon2 name={iconName} size={40} color='#222' />
                                break
                            case 'Perfil':
                                iconName = focused ? 'person' : 'person-outline'
                                icon =  <Icon2 name={iconName} size={40} color='#222' />
                                break
                            default:
                                break
                        }
                        return icon
                    }
                })}>
                <Tab.Screen name='Grupos' component={ActivityNavigator} />
                <Tab.Screen name='Minhas atividades' component={GroupList} />
                <Tab.Screen name='Perfil' component={GroupList} />
            </Tab.Navigator>
    )
}

const ScreenNavigator = props => {
    return (
        <Drawer.Navigator initialRouteName='Home' 
            drawerPosition='right' 
            drawerStyle={{
                backgroundColor: '#eee',
                height: '30%',
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
                }
            }}>
            <Drawer.Screen name='Home' component={MenuNavigator} />
            <Drawer.Screen name='Configurações' component={GroupList} />
            <Drawer.Screen name='Contate-nos' component={GroupList} />
            <Drawer.Screen name='Sair' component={GroupList} />
        </Drawer.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <ScreenNavigator />
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