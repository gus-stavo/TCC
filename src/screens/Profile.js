import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView, Button } from 'react-native'

import { Avatar } from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends Component{

    state ={
        name:'NUBS',
        email:'nubstcc@gmail.com',
        password:'macaco',
        confirmPassword:'macaco',
        cep:'11451140',
        state:'São Paulo',
        city:'Santos',
        street:'Avenida siqueira campos',
        housen:'1152',
        neighbhd:'Embaré',
        editMode: false,
    }

    save = () =>{
        this.props.onSave(this.editedProfile)
    }

    editedProfile = () =>{
        if(this.state.editMode){
            Alert.alert('Editado com Sucesso')
        }else{
            Alert.alert('Usuário deslogado')
        }
    }

    render(){

        const options = {email: 'fodase', secure:true}

        return(
        
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <View style={styles.containerAvatar}>
                        <Avatar rounded title='GS' size='xlarge' style={styles.avatar} titleStyle={{ color: '#eee' }} />
                    </View>
                    <View style={styles.containerIcon}>
                        <TouchableOpacity onPress={() => this.setState({ editMode: !this.state.editMode })}>
                                <Icon name='account-edit-outline' size={40} color='#222' /> 
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.containerInfo}>
                        <Text style={styles.label}>Nome:</Text>
                    
                        {this.state.editMode ?  <TextInput  style={styles.EditableText} placeholder='Atualize seu Nome'>{this.state.name}</TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={name => this.setState({name})}>{this.state.name}</TextInput>}   

                        <Text style={styles.label}>E-mail:</Text>
                        {this.state.editMode ?   <TextInput  style={styles.EditableText} placeholder='Atualize seu Email'>{this.state.email}</TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={email => this.setState({email})}>{this.state.email}</TextInput>}   
                        
                        <Text style={styles.label}>Senha:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} secureTextEntry={true} placeholder='Atualize sua Senha'>{this.state.password}</TextInput> : 
                        <TextInput style={styles.text} editable={false} secureTextEntry={true} onChangeText={password => this.setState({password})}>{this.state.password}</TextInput>}     
                            
                        {(this.state.editMode ) &&
                        <>              
                        <Text style={styles.label}>Confirme sua Senha:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} secureTextEntry={true} placeholder='Atualize sua Senha'>{this.state.password}</TextInput> : 
                        <TextInput style={styles.text} editable={false} secureTextEntry={true}  onChangeText={confirmPassword => this.setState({confirmPassword})}>{this.state.confirmPassword}</TextInput>} 
                        </>}

                        <Text style={styles.label}>CEP:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} placeholder='Atualize seu CEP'>{this.state.cep}</TextInput> :                         
                        <TextInput style={styles.text} editable={false} onChangeText={cep => this.setState({cep})}>{this.state.cep}</TextInput>}

                        <Text style={styles.label}>Estado:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} placeholder='Atualize seu Estado'>{this.state.state}</TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={state => this.setState({state})}>{this.state.state}</TextInput>}

                        <Text style={styles.label}>Cidade:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} placeholder='Atualize seu Cidade'>{this.state.city}</TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={city => this.setState({city})}>{this.state.city}</TextInput>}

                        <Text style={styles.label}>Bairro:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} placeholder='Atualize seu Bairro'> {this.state.neighbhd}</TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={neighbhd => this.setState({neighbhd})}>{this.state.neighbhd}</TextInput>}

                            <Text style={styles.label}>Rua:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} placeholder='Atualize seu Rua'>{this.state.street} </TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={street => this.setState({street})}>{this.state.street}</TextInput>}

                            <Text style={styles.label}>Número:</Text>
                        {this.state.editMode ?  <TextInput style={styles.EditableText} placeholder='Atualize seu Número'> {this.state.housen}</TextInput> : 
                        <TextInput style={styles.text} editable={false} onChangeText={housen => this.setState({housen})}>{this.state.housen}</TextInput>} 
                    </View>
                    {this.state.editMode &&           
                        <View style={styles.containerBtn}>
                            <TouchableOpacity onPress={this.editedProfile} style={styles.btn} >
                                <Text style={styles.btnText}>
                                    Salvar Mudanças
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </ScrollView>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#eee'
    },
    containerTop: {
        backgroundColor: 'rgba(111, 222, 552, 1)',
        borderBottomWidth: 1,
        elevation: 5
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
    containerIcon: {
        padding: 15,
        alignItems: 'flex-end', 
    },
    containerInfo: {
        alignItems: 'center',
        marginBottom: 50,
    },
    label:{
        marginTop: 50,
        fontFamily: 'Exo2-Medium', 
        fontSize: 20,
        color: '#222',
    },


    containerBtn: {
        alignItems: 'center',
        marginBottom: 50,
    },
    btn: {
        backgroundColor: 'rgba(111, 222, 552, 1)',
        padding: 10,
        width: 180,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#222',
        alignItems: 'center',
        elevation: 5
    },
    btnText:{
        fontSize: 20,
        color: '#222',     
        fontFamily: 'Exo2-Medium' 
    },
    
    
    nickname:{
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },    
    EditText:{
        marginRight: 50,
        textAlign: 'right'
    },
    text:{
        marginTop: 20,
        fontSize: 20,
        borderBottomWidth:1,
        width:300,
        padding:10,
        color:'black'
    },
    EditableText:{
        marginTop: 20,
        fontSize: 20,
        borderBottomWidth:1,
        width:300,
        padding:10,
        color:'#929292'
    }
})

