import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
 
import AuthInput from './AuthInput'


export default class Auth extends Component {

    state ={
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        stageNewUser: false,
        forgotPwd: false
    }

    siginOrSignup = () =>{
        if(this.state.stageNewUser){
            Alert.alert('Sucesso ao criar a conta!')
        }else{
            Alert.alert('Sucesso, Logado!')
        }
    }


    render() {
        return (            
            <View style={styles.background}>
               <Text style={styles.title}>Login</Text>
                <View  style={styles.formContainer}>
            
                    <Text style={styles.subTitle}>
                        {this.state.stageNewUser ? 'Crie a sua conta' : (this.state.forgotPwd ? 'Esqueceu a senha?' : 'Informe seus dados')}
                    </Text>

                    {this.state.stageNewUser && 
                       <AuthInput icon='account-circle' placeholder='Nome' value={this.state.name}
                      style={styles.input} onChangeText={name => this.setState({name})} />
                    }

                    <AuthInput icon='at' placeholder='Informe seu E-mail' value={this.state.email}
                    style={styles.input} onChangeText={email => this.setState({email})} />

                    {!this.state.forgotPwd &&
                        <AuthInput icon='lock' placeholder='Senha' value={this.state.password}
                        style={styles.input} secureTextEntry={true}
                        onChangeText={password => this.setState({password})} />
                    }
                    
                    {this.state.stageNewUser &&
                          <AuthInput icon='lock' placeholder='Confirme sua Senha' 
                         value={this.state.confirmPassword}
                         style={styles.input} secureTextEntry={true}
                         onChangeText={confirmPassword => this.setState({confirmPassword})} />
                    }

                    <TouchableOpacity onPress={this.siginOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNewUser ? 'Registrar' : (this.state.forgotPwd ? 'Confirmar' : 'Entrar')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    {(!this.state.forgotPwd && !this.state.stageNewUser) &&
                        <>
                        <TouchableOpacity style={styles.buttonChange}
                        onPress={ () => this.setState({forgotPwd: !this.state.forgotPwd})}>
                            <Text>
                                Esqueci minha senha
                            </Text>
                        </TouchableOpacity>

                        {/* Botão Criar uma conta */}
                        <TouchableOpacity style={styles.buttonChange}
                            onPress={ () => this.setState({stageNewUser: !this.state.stageNewUser})}>
                            <Text>   
                                Ainda não possui uma conta?
                            </Text>
                        </TouchableOpacity>
                        </>
                    }
                {/* Botão Voltar */}
                {(this.state.forgotPwd || this.state.stageNewUser) &&
                    <TouchableOpacity onPress={() => {
                        if (this.state.forgotPwd) this.setState({ forgotPwd: !this.state.forgotPwd })
                        if (this.state.stageNewUser) this.setState({ stageNewUser: !this.state.stageNewUser })
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Voltar
                            </Text>
                        </View>
                    </TouchableOpacity>

                }
                <TouchableOpacity style={styles.loginSocial}>
                    <Text style={styles.textSocialLog}> Faça login com as redes socias</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(111, 222, 552, 0.4)'
    },
    formContainer:{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding:20,
        width:'90%',
        borderRadius:10,
    },
    input:{
        marginTop:10,
        backgroundColor: '#FFF',
    },
    title:{
        fontSize:70,
        marginBottom:10,
        color:'black'
    },
    subTitle:{
        fontSize:20,
        textAlign:'center',
        color:'#FFF',
        marginBottom:10
    },
    buttonText:{
        color:'black',
        fontSize:20
    },
    button:{
        backgroundColor:'#180',
        marginTop: 10,
        padding: 10,
        alignItems:'center',
        borderRadius:8
    },
    buttonChange:{
        padding:10
    },
    loginSocial:{
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        marginTop:120,
        padding:10,
        borderRadius:25
    },
    textSocialLog:{
        color:'#fff'
    }
})