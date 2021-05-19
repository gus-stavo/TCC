import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
 
import AuthInput from '../components/AuthInput'

const initialState = {
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        stageNewUser: false,
        stageForgotPwd: false
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    signinOrSignup = () =>{
        if(this.state.stageNewUser){
            Alert.alert('Sucesso ao criar a conta!')
            this.setState({ ...initialState })
        }else if(this.state.stageForgotPwd){
            Alert.alert('Sucesso, senha nova enviada ao seu e-mail!')
            this.setState({ ...initialState })
        }
        else{
            Alert.alert('Sucesso, logado!')
            this.props.navigation.navigate('Home Stack')
        }
    }
    
    render() {
        return (            
            <View style={styles.background}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>4meR</Text>

                    <Text style={styles.subTitle}>
                        {this.state.stageNewUser ? 'Crie a sua conta' : (this.state.stageForgotPwd ? 'Esqueceu sua senha?' : 'Informe seus dados')}
                    </Text>

                    {this.state.stageNewUser && 
                        <AuthInput icon='account-circle' placeholder='Nome' value={this.state.name}
                            style={styles.input} onChangeText={name => this.setState({ name })} />
                    }

                    <AuthInput icon='at' placeholder={this.state.stageForgotPwd ? 'Informe seu e-mail' : 'E-mail'}  value={this.state.email}
                        style={styles.input} onChangeText={email => this.setState({ email })} />

                    {!this.state.stageForgotPwd &&
                        <AuthInput icon='lock' placeholder='Senha' value={this.state.password}
                            style={styles.input} onChangeText={password => this.setState({password})} 
                            secureTextEntry />
                    }
                    
                    {this.state.stageNewUser &&
                        <AuthInput icon='lock' placeholder='Confirme sua senha' 
                            value={this.state.confirmPassword}
                            style={styles.input} secureTextEntry
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }

                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNewUser ? 'Registrar' : (this.state.stageForgotPwd ? 'Confirmar' : 'Entrar')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {(!this.state.stageForgotPwd && !this.state.stageNewUser) &&
                        <View style={styles.textButtons}>
                            <View style={styles.textButton}>
                                <TouchableOpacity onPress={() => this.setState({stageNewUser: !this.state.stageNewUser})}>
                                    <Text style={styles.textButtonTitle}>   
                                        Registre-se
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.textButton}>
                                <TouchableOpacity onPress={() => this.setState({stageForgotPwd: !this.state.stageForgotPwd})}>
                                    <Text style={styles.textButtonTitle}>
                                        Esqueceu a senha?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    {(this.state.stageForgotPwd || this.state.stageNewUser) &&
                        <View style={styles.textButtons}>
                            <View style={styles.textButton}>
                                <TouchableOpacity onPress={() => {
                                    if (this.state.stageForgotPwd) this.setState({ stageForgotPwd: !this.state.stageForgotPwd })
                                    if (this.state.stageNewUser) this.setState({ stageNewUser: !this.state.stageNewUser })
                                    }}>
                                    <Text style={styles.textButtonTitle}>
                                        Voltar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(111, 222, 552, 1)'
    },
    title: {
        fontSize: 70,
        marginBottom: 10,
        fontFamily: "Exo2-SemiBoldItalic",
        color: '#222',
    },
    formContainer: {
        backgroundColor: '#eee',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#222',
        elevation: 8,
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#222',
        marginBottom: 10,
        fontFamily: 'Exo2-Medium'
    },
    input: {
        marginTop: 10,
    },
    button: {
        backgroundColor: 'rgba(111, 222, 552, 1)',
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#222',
        width: 150,
        borderWidth: 1,
        elevation: 5
    },
    buttonText: {
        color: '#222',
        fontSize: 20,
        fontFamily: 'Exo2-Medium'
    },
    textButtons: {
        alignItems: 'center',
        
    },
    textButton: {
        alignItems: 'center',
        marginTop: 50
        
    },
    textButtonTitle: {
        fontSize: 20,
        fontFamily: 'Exo2-Medium',
        color: '#222',
    }  
})