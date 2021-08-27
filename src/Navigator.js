import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import commonStyles from './commonStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import GroupList from './screens/GroupList'
import ActivityList from './screens/ActivityList'
import Menu from './screens/Menu'
import Auth from './screens/Auth'
import Profile from './screens/Profile'
import Contact from './screens/Contact'
import Config from './screens/Config'
import ConfigConta from './screens/ConfigConta'
import ConfigAparencia from './screens/ConfigAparencia'
import ConfigAbout from './screens/ConfigAbout'
import Activity from './screens/Activity'
import CreateActy1 from './screens/CreateActy1'
import CreateActy2 from './screens/CreateActy2'
import CreateActy3 from './screens/CreateActy3'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const ActivityNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Grupos' component={GroupList} />
            <Stack.Screen name='Atividades' component={ActivityList} />
            <Stack.Screen name='Atividade' component={Activity} />
            <Stack.Screen name='Etapa 1' component={CreateActy1} />
            <Stack.Screen name='Etapa 2' component={CreateActy2} />
            <Stack.Screen name='Etapa 3' component={CreateActy3} />
        </Stack.Navigator>
    )
}

const ConfigNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Configurações' component={Config} />
            <Stack.Screen name='Aparência' component={ConfigAparencia} />
            <Stack.Screen name='Conta' component={ConfigConta} />
            <Stack.Screen name='Sobre' component={ConfigAbout} />
        </Stack.Navigator>
    )
}

const MenuNavigator = () => {
    return (
            <Tab.Navigator tabBarOptions={{ showLabel: false, style: styles.containerTab }}
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
                <Tab.Screen name='Minhas atividades' component={ActivityList} />
                <Tab.Screen name='Perfil' component={Profile} />
            </Tab.Navigator>
    )
}

const ScreenNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' 
            drawerPosition='right' 
            drawerStyle={{
                backgroundColor: commonStyles.cores.branco,
                height: 275,
                borderRadius: 10,
                borderColor: commonStyles.cores.preto,
                borderWidth: 1,
                elevation: 10,
            }}
            drawerContentOptions={{
                activeTintColor: commonStyles.cores.azul,
                labelStyle:{
                    color:commonStyles.cores.preto,
                    fontFamily:'Exo2-Medium',
                },
            }}
            drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name='Home' component={MenuNavigator} />
            <Drawer.Screen name='Configurações' component={ConfigNavigator} />
            <Drawer.Screen name='Contate-nos' component={Contact} />
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
    containerTab: {
        backgroundColor: commonStyles.cores.branco,
        elevation: 5,
    }
})