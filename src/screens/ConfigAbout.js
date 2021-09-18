import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import commonStyles from '../commonStyles'

import Header from '../components/Header'

export default class About extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
            <View>
                <Header name={this.props.route.name} openDrawer={() => { this.openDrawer() }} />
                <View style={styles.container}>
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

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.cores.azul,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        backgroundColor: commonStyles.cores.branco,
        width: commonStyles.containerWhite.width,
        height: commonStyles.containerWhite.height,
        borderWidth: commonStyles.containerWhite.borderBottomWidth,
        borderRadius: commonStyles.containerWhite.borderRadius,
        elevation: commonStyles.containerWhite.elevation
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginHorizontal: commonStyles.buttons.marginHorizontal,
        marginTop: commonStyles.buttons.marginTop,
        marginBottom: commonStyles.buttons.marginBottom,
        height: commonStyles.buttons.height,
        borderWidth: commonStyles.buttons.borderWidth,
        borderRadius: commonStyles.buttons.borderRadius,
        flexDirection: commonStyles.buttons.flexDirection,
        alignItems: commonStyles.buttons.alignItems,
        backgroundColor: commonStyles.cores.branco,
        shadowColor: commonStyles.cores.preto,
        shadowOffset: {
            width: commonStyles.buttons.shadowOffset.width,
            height: commonStyles.buttons.shadowOffset.height
        },
        shadowOpacity: commonStyles.buttons.shadowOpacity,
        shadowRadius: commonStyles.buttons.shadowRadius,
        elevation: commonStyles.buttons.elevation
    },
})