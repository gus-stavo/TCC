import React, {Component, state, useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, TouchableHighlight} from 'react-native'
import { Avatar } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker'

const initialState = {
    problema: 'Escolha',
    switchValue: false,
    currentPosition:0
}

export default class Contact extends Component{

    state = {
        ...initialState
    }

    toggleSwitch = (value) =>{
        this.setState({switchValue : value})
    }

    render(){     
        const problem = this.state.problem
        return(
            <View style={styles.container}>      
                <View style={styles.mainContainer}>
                    <View style={styles.containerAvatar}>
                        <Avatar rounded title='GS' size='xlarge' style={styles.avatar} titleStyle={{ color: '#eee' }} />
                    </View>
                    <View style={styles.inputTittleView}>
                        <Text style={styles.inputTittle}>Nome da Atividade:</Text>
                    </View>  
                    <View>
                        <TextInput style={styles.inputAtividade}/>
                    </View>
                    <View style={styles.inputTittleView}>
                        <Text style={styles.inputTittle}>Selecione o grupo:</Text>
                    </View>  
                    <View style={styles.pickerView}>
                        <Picker
                            mode="dropdown"
                            selectedValue={this.state.problem}
                            onValueChange={(itemValue) =>
                                this.setState({ problem: itemValue })
                            }
                            placeholder='Selecione' >   
                            <Picker.Item label="Futebol" value="Futebol" />
                            <Picker.Item label="Pesca" value="Pesca" />
                            <Picker.Item label="Esgrima" value="Esgrima" />
                            <Picker.Item label="Basquete" value="Basquete" />
                            <Picker.Item label="Caminhada" value="Caminhada" />
                        </Picker>
                    </View>
                    <View style={styles.inputTittleView}>
                        <View  style={styles.switchStyle}>
                            <Text style={styles.inputTittle}>Usar senha:</Text>
                            <View>
                                <Switch  
                                    onValueChange={this.toggleSwitch} 
                                    value={this.state.switchValue} />
                            </View>
                        </View>
                    </View>  
                    {(this.state.switchValue ) &&
                        <View>
                            <TextInput style={styles.inputAtividade} placeholder="Digite a Senha"/>
                            <TextInput style={styles.inputAtividade} placeholder="Confime a Senha"/>
                        </View>
                    }
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.editedProfileButton} onPress={() => {this.props.navigation.navigate('Etapa 2')}}>
                            <Text style={styles.buttonText}>Proxima</Text>
                            
                        </TouchableOpacity>                      
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(111, 222, 552, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      },
      mainContainer: {
        backgroundColor: '#EEE',
        width: '87%',
        height: '92%',
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30, 
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: '#222',
    },
    inputAtividade:{
        marginVertical: 5,
        borderBottomWidth:1,
        borderWidth:1,
        borderRadius:20,
        borderStyle:'solid',
        width: 300,
        height:40,
        padding:10
       },
    pickerView:{
        borderWidth:1,
        borderRadius:20,
        borderStyle:'solid',
        width: 300,
        height: 40,
        justifyContent: 'center',
        marginVertical: 10,

     },
    

    inputTittleView:{
        marginVertical: 5,
        borderBottomWidth:1,
        width:325,
        marginBottom: 20
    },
    inputTittle:{
        fontSize:20,
        marginBottom:6
    },
    switchStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containerButton:{
        alignItems:'center'
    },
    buttonText:{
        fontSize: 20,
        color:'black',
        textAlign: 'center',        
    }, 
    editedProfileButton:{
        padding: 8,
        width: 180,
        height:45,
        borderRadius:28,
        borderWidth:1,
        marginTop:25,
        marginBottom:15,
        backgroundColor:'#00D9E7',
    },

})



