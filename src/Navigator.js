import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import GroupList from './screens/GroupList'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Grupos' component={GroupList} />
                <Tab.Screen name='Gruposs' component={GroupList} />
                <Tab.Screen name='Gruposss' component={GroupList} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}