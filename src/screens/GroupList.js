import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Group from '../components/Group'
import Groups from '../Groups'

export default class GroupList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Header name={this.props.route.name}/>
                </View>
                <View style={styles.list}>
                    <FlatList data={Groups}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                        renderItem={({ item }) =>
                            <Group key={item.id} {...item} />} />
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
        flex: 1
    }
})