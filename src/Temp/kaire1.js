import React, { Component } from 'react'
import{View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity, Switch, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../components/Header'

export default class Config extends Component {

    openActivities = props => {
        this.props.navigation.navigate('Minhas Atividades')
    }
    state = {
        switchValue: false,
        Problema: '',
    }
        toggleSwitch = (value) =>{
        this.setState({switchValue : value})
        }

    render(){
        
     

        return(
            
            <View style={styles.container}>
                <Header name={'Minhas Atividades'}></Header>
                

                    <View style={styles.containerBox}>
                        
                        
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}]}>
                            <Text style={[styles.titulo]}>Atividades Recentes</Text>
                            <Icon style={[{alignItems: 'center', justifyContent: 'center'}]} name="filter-outline" size={35}></Icon>
                        </View>

                            <ScrollView horizontal={true}>
                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                            </ScrollView>

                        <View style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}]}>
                            <Text style={[styles.titulo]}>Todas Atividades Ativas</Text>
                        </View>

                        <ScrollView horizontal={true}>
                    
                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>

                                <View style={styles.atividade}>
                                    <Text style={styles.textoCentralAtividade}>Olá Mundo</Text>
                                </View>
                            </ScrollView>

                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({


    
    container: {
        flex: 1,
        backgroundColor: 'rgba(111, 222, 552, 1)',
    },
    containerBox: {
        flexDirection: 'column',
        flex: 1,
        padding: 15,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '8%',
        marginRight: '8%',
        backgroundColor: '#EEE',
        borderWidth: 1,
        borderRadius: 15,
    },
    titulo: {
        
        fontWeight: 'bold',
        fontSize: 20,     
    },
    textoCentralAtividade: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    atividade: {
        backgroundColor: '#AEE',
        height: 200,
        width: 150,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    borda: {
        
        borderBottomWidth: 2,
        maxWidth: 400,
        marginTop: -10,
    },
    switchStyle:{
        flexDirection:'row',
        alignItems: 'flex-end', 
    },
    pickerView:{
        borderWidth:1,
        borderRadius:20,
        borderStyle:'solid',
        width: 150,
        height: 30,
        marginTop: 20,
        justifyContent: 'center',
        
       },
})