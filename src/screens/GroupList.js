import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Group from '../components/Group'
import Groups from '../Groups'

export default class GroupList extends Component {

    openActivities = props => {
        this.props.navigation.navigate('Atividades')
    }

    openDrawer = props => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Header name={this.props.route.name} openDrawer={() => {this.openDrawer()}} />
                </View>
                <View style={styles.list}>
                    <FlatList data={Groups}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                        renderItem={({ item }) =>
                            <Group key={item.id} {...item} openActivities={() => {this.openActivities()}} />} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(111, 222, 552, 1)'
    }
})