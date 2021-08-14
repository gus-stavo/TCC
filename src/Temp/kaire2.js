import React, { Component } from 'react'
import{View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity, Switch} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import Header from '../components/Header'

export default class Config extends Component {

    openActivities = props => {
        this.props.navigation.navigate('Configurações')
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
                <Header name={'Aparência'}></Header>
                

                    <View style={styles.containerBox}>
                        
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between',}]}>
                            <Text style={[styles.titulo]}>Tema escuro</Text>
                                <View style={styles.switchStyle}>
                                    <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}> 
                                    </Switch>
                                </View>
                        </View>

                        <View>
                        <Text style={[styles.borda]}></Text>
                        </View>

                        <View style={[{flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between',}]}>
                            <Text style={[styles.titulo]}>Estilo</Text>
                            <View style={styles.pickerView}>
                            <Picker
                               mode= 'dropdown'
                               selectedValue={this.state.problem}
                                onValueChange={(itemValue) =>
                                    this.setState({ problem: itemValue })
                                }
                            placeholder='Selecione' >   
                                <Picker.Item label="Arial" value="Arial" />
                                <Picker.Item label="Pesca" value="Pesca" />
                                <Picker.Item label="Esgrima" value="Esgrima" />
                                <Picker.Item label="Basquete" value="Basquete" />
                                <Picker.Item label="Caminhada" value="Caminhada" />
                            </Picker>
                            </View>
                            
                        </View>
                        <View>
                        <Text style={[styles.borda]}></Text>
                        </View>

                            
                        

                      
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
        paddingTop: 15,
        fontWeight: 'bold',
        fontSize: 25,     
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