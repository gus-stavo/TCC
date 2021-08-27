import React, {Component, state} from 'react'
import {View, Text, StyleSheet, TextInput, Switch, Keyboard, TouchableOpacity} from 'react-native'

import commonStyles from '../commonStyles'
 
export default class Contact extends Component{


    state = {
        Problema: '',
        switchValue: false,
        currentPosition: 2
       }
    toggleSwitch = (value) =>{
        this.setState({switchValue : value})
    }

    render(){
        return(
        <View style={styles.containerTop}>  
            <View style={styles.containerBotTittle}>
                <View style={styles.inputTittleView}>
                    <View style={styles.containetStep}>

                    </View>
                    <View  style={styles.switchStyle}>
                                <Text style={styles.inputTittle}>    
                                    Limitar: 
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
                        <View style={styles.inputTittleView}>
                            <View  style={styles.switchStyle}>
                                <Text style={styles.inputTittle}>    
                                    Número máximo: 
                                </Text>
                                <TextInput style={styles.inputAtividade} keyboardType="numeric" maxLength={2}>

                                </TextInput>
                            </View>
                       </View>
                         </>}
                <View style={styles.inputDescricao}>
                    <Text style={styles.inputTittle}>    
                        Descrição:
                    </Text>
                </View>  
                <View style={styles.sugestionPlaceBox} >
                        <TextInput style={{fontSize:20}}  multiline={true} onSubmitEditing={Keyboard.dismiss} 
                        returnKeyType='none'   />
                </View>
                <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.editedProfileButton} >
                                <Text style={styles.buttonText}>
                                        Criar
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
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#00D9E7',
        },
        containerBotTittle:{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: commonStyles.cores.branco,
            borderWidth:1,
            borderRadius:15,
            height:'85%',
            width:'90%',
        },
        containetStep:{
            marginBottom:100
        },
        inputAtividade:{
            marginBottom:5,
            borderWidth:1,
            borderRadius:75,
            borderStyle:'solid',
            width: 120,
            height:35,
            padding:0,
            paddingLeft:10,
           },    
        switchStyle:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        inputTittle:{
            fontSize:20,
            marginBottom:6,
        },
        inputTittle2:{
            marginVertical:2,
            borderBottomWidth:1,
            width:180,
            fontSize:20
        },
        inputTittleView:{
            borderBottomWidth:1,
            width:325,
            marginBottom: 20
        },
        inputDescricao:{
            borderBottomWidth:1,
            width:325,
        },
        sugestionPlaceBox:{
            marginTop: 10,
            borderWidth:1,
            borderRadius:16,
            width:327,
            height:'35%',
            padding:3,
            color:'#929292',
        },     
        containerButton:{
            alignItems:'center'
        },
        buttonText:{
            fontSize: 20,
            color: commonStyles.cores.preto,
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