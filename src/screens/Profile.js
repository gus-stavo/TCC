import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView, Button } from 'react-native'

import { Avatar } from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends Component{

    state = {
        name:'',
        cep:'',
        state:'',
        city:'',
        district:'',
        street:'',
        number:'',
        editMode: false,
    }

    save = () => {
        this.props.onSave(this.editedProfile)  
    }

    editedProfile = () => {
        if(this.state.editMode){
            Alert.alert('Editado com sucesso')
        }else{
            Alert.alert('Usuário deslogado')
        }
    }

    buscaCep = async () => {
        let response = await fetch(
            `https://viacep.com.br/ws/${this.state.cep}/json/`
        );

        let json = await response.json();

        this.setState({
            state: json.uf,
            city: json.localidade,
            district: json.bairro,
            street: json.logradouro
        })
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
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} editable={this.state.editMode ? true : false} onChangeText={name => this.setState({ name })} placeholder='Atualize seu nome'>
                            {this.state.name}
                        </TextInput>

                        <Text style={styles.label}>CEP:</Text>
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} onEndEditing={this.buscaCep} editable={this.state.editMode ? true : false} onChangeText={cep => this.setState({ cep })} placeholder='Atualize seu CEP'>
                            {this.state.cep}
                        </TextInput>

                        <Text style={styles.label}>Estado:</Text>
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} editable={this.state.editMode ? true : false} onChangeText={state => this.setState({ state })} placeholder='Atualize seu estado'>
                            {this.state.state}
                        </TextInput>

                        <Text style={styles.label}>Cidade:</Text>
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} editable={this.state.editMode ? true : false} onChangeText={city => this.setState({ city })} placeholder='Atualize sua cidade'>
                            {this.state.city}
                        </TextInput>

                        <Text style={styles.label}>Bairro:</Text>
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} editable={this.state.editMode ? true : false} onChangeText={district => this.setState({ district })} placeholder='Atualize seu bairro'>
                            {this.state.district}
                        </TextInput>

                        <Text style={styles.label}>Rua:</Text>
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} editable={this.state.editMode ? true : false} onChangeText={street => this.setState({ street })} placeholder='Atualize sua rua'>
                            {this.state.street}
                        </TextInput>

                        <Text style={styles.label}>Número:</Text>
                        <TextInput style={[styles.text, {color: this.state.editMode ? '#929292' : 'black'}]} editable={this.state.editMode ? true : false} onChangeText={number => this.setState({ number })} placeholder='Atualize seu número'>
                            {this.state.number}
                        </TextInput>
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
    editText:{
        marginTop: 20,
        fontSize: 20,
        borderBottomWidth:1,
        width:300,
        padding:10,
        color:'#929292'
    }
})
