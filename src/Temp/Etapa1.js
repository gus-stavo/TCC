import React, {Component, state, useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, TouchableHighlight} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import StepIndicator from 'react-native-step-indicator';

export default class Contact extends Component{
   
    labels = ["Etapa 1", "Etapa 2", "Etapa 3"]

    customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#00d9e7',
        stepStrokeWidth:3 ,
        stepStrokeFinishedColor: '#00d9e7',
        stepStrokeUnFinishedColor: 'gray',
        separatorFinishedColor: '#00d9e7',
        separatorUnFinishedColor: 'gray',
        stepIndicatorFinishedColor: '#00d9e7',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#00d9e7',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: 'black',
        labelColor: 'black',
        labelSize: 17,
        currentStepLabelColor: '#00d9e7',
      }

    state = {
             Problema: '',
             switchValue: false,
             currentPosition:0
            }
    toggleSwitch = (value) =>{
        this.setState({switchValue : value})
    }
    render(){     
        const problem = this.state.problem
        return(
        <View style={styles.containerTop}>      
            <View style={styles.containerBotTittle}>
                <View style={styles.stepContainer}>
                    <View>
                         <StepIndicator
                                customStyles={this.customStyles}
                                stepCount = {3}
                                labels={this.labels}
                                currentPosition
                                currentPosition={this.state.currentPosition}
                        />
                    </View>
                     <View style={styles.avatarContainer}>                 
                       <Text style={styles.avatar}>
                       </Text>
                     </View> 
                </View>
                        <View style={styles.inputTittleView}>
                            <Text style={styles.inputTittle}>   
                            Nome da Atividade:  
                            </Text>
                        </View>  
                       <View>
                           <TextInput style={styles.inputAtividade}>

                           </TextInput>
                       </View>
                       <View style={styles.inputTittleView}>
                            <Text style={styles.inputTittle}>   
                            Selecione o grupo:  
                            </Text>
                        </View>  
                        <View style={styles.pickerView}>
                            <Picker style={styles.pickerText}
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
                                <Text style={styles.inputTittle}>    
                                    Usar senha: 
                                </Text>
                                <View>
                                    <Switch  onValueChange={this.toggleSwitch} 
                                    value={this.state.switchValue}>
                                    </Switch>
                                </View>
                            </View>
                        </View>  
                        {(this.state.switchValue ) &&
                        <>
                        <View>
                           <TextInput style={styles.inputAtividade} placeholder="Digite a Senha">

                           </TextInput>
                           <TextInput style={styles.inputAtividade} placeholder="Confime a Senha"> 

                           </TextInput>
                       </View>
                       </>
                       }
                       <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.editedProfileButton} >
                                <Text style={styles.buttonText}>
                                        Proxima
                                </Text>
                            </TouchableOpacity>                      
                       </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    containerTop: {
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#00D9E7',
    },
    containerBotTittle:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth:1,
        borderRadius:15,
        height:750,
        width:'90%',
    },
    stepContainer:{
        width:325,
    },
    avatarContainer:{
        padding:30,
        alignItems:'center',
        justifyContent:'center'
    },
    avatar:{
        width: 150,
        height: 150,
        borderWidth:4,
        borderRadius: 75,
        borderColor:'black'
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
     marginVertical: 5,
     borderWidth:1,
     borderRadius:20,
     borderStyle:'solid',
     width: 300,
     height:40,
    },
    pickerText:{
        padding:0,
        paddingLeft:111 ,
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



