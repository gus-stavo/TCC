import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'

import GroupList from './screens/GroupList'
import ActivityList from './screens/ActivityList'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

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
            <Tab.Navigator tabBarOptions={{ showLabel: false}}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        let icon

                        switch(route.name) {
                            case 'Grupos':
                                iconName = focused ? 'home' : 'home-outline'
                                icon = <Icon1 name={iconName} size={50} color='#000' />
                                break
                            case 'Minhas atividades':
                                iconName = focused ? 'calendar' : 'calendar-outline'
                                icon =  <Icon2 name={iconName} size={40} color='#000' />
                                break
                            case 'Notificações':
                                iconName = focused ? 'bell' : 'bell-outline'
                                icon =  <Icon1 name={iconName} size={45} color='#000' />
                                break
                            default:
                                break
                        }
                        return icon
                    }
                })}>
                <Tab.Screen name='Grupos' component={ActivityNavigator} />
                <Tab.Screen name='Minhas atividades' component={GroupList} />
                <Tab.Screen name='Notificações' component={GroupList} />
            </Tab.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <MenuNavigator />
        </NavigationContainer>
    )
}

export default Navigator