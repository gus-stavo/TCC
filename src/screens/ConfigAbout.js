import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import Header from '../components/Header'

export default class About extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Header name={this.props.route.name} openDrawer={() => {this.openDrawer()}} />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.line}>
                        <Text>Versão</Text>
                        <Text>0.01</Text>
                    </View>
                    <View style={styles.line}>
                        <Text>Atualizado em</Text>
                        <Text>14 de ago. de 2021</Text>
                    </View>
                    <View style={styles.line}>
                        <Text>Oferecido por</Text>
                        <Text>Nubs</Text>
                    </View>
                    <View style={styles.line}>
                        <Text>Lançado em</Text>
                        <Text>14 de ago. de 2021</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00D9E7',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      },
      mainContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '87%',
        height: '92%',
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 50
      },
      line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        width: '90%',

      },
})