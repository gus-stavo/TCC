import React, { Component } from 'react'
import{View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView, Modal} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../components/Header'
import commonStyles from '../commonStyles'

export default class Config extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    openActivities = props => {
        this.props.navigation.navigate('Configurações')
    }
    constructor(props){
        super(props);
        this.state = {isVisible: false}
        this.state = {swapModalTitle: false}
    }

    render(){
        const swapModalTitle = this.state.swapModalTitle
        return(
            
            <View style={styles.container}>
                <View>
                    <Header name={this.props.route.name} openDrawer={() => {this.openDrawer()}} />
                </View>
                <ScrollView>
                    <View style={styles.containerBox}>

                        <View>
                            <Text style={[styles.titulo]}>Redefinir Email</Text>
                            <Text style={[styles.borda]}></Text>
                        </View>

                        <View>
                        <TextInput style={styles.input} placeholder='Digite um novo email'></TextInput>
                        <TextInput style={styles.input} placeholder='Confirme seu novo email'></TextInput>
                        </View>

                        
                        <TouchableOpacity style={styles.clicavel} 
                            onPress={ () => {
                            this.setState({isVisible: true})
                            this.setState({swapModalTitle: true}) }}>
                            <Text style={styles.texto}>Redefinir</Text>
                        </TouchableOpacity>
                        

                        <View>
                            <Text style={[styles.titulo]}>Redefinir Senha</Text>
                            <Text style={[styles.borda]}></Text>
                        </View>

                        <View style={styles.inputBox}>
                        <TextInput style={styles.input} placeholder='Digite uma nova senha'></TextInput>
                        <TextInput style={styles.input} placeholder='Confirme sua nova senha'></TextInput>
                        </View>

                        <TouchableOpacity style={styles.clicavel} 
                            onPress={ () => {
                            this.setState({isVisible: true})
                            this.setState({swapModalTitle: false}) }}>
                            <Text style={styles.texto}>Redefinir</Text>
                        </TouchableOpacity>

                        
                            <Modal
                            
                            animationType={'slide'}
                            transparent={true} 
                            visible={this.state.isVisible}
                            onRequestClose = {() => {
                                this.setState({isVisible: false})
                                this.setState({swapModalTitle: false})
                            }}>
                                <View style={styles.centeredView}>
                                    
                                <TouchableOpacity style={styles.sairTela} onPress={ () => {
                                            this.setState({isVisible: null}) }}>
                                            
                                            </TouchableOpacity>
                                    <View style={styles.modalView}>

                                        {swapModalTitle
                                        ? <Text style={styles.titulo}>Para redefinir seu email digite sua senha: </Text>
                                        :<Text style={styles.titulo}>Para redefinir, digite sua senha atual: </Text>
                                        }
                                        <TextInput style={[styles.inputModal]} placeholder='Digite sua senha'></TextInput>
                                        <View style={[{flexDirection: 'row', justifyContent: 'space-around',}]}>

                                        <TouchableOpacity style={styles.clicavelModal} onPress={ () => {
                                            this.setState({isVisible: false}) }}>
                                            <Icon name="close" size={40}></Icon>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity style={styles.clicavelModal} onPress={ () => {
                                        this.setState({isVisible: false}) }}>
                                        <Icon name="check" size={40}></Icon>
                                        </TouchableOpacity>

                                        
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        
                
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({


    centeredView: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        
        
      },
    modalView: {

        flexDirection: 'column',
        padding: 20,
        maxHeight: 600,
        maxWidth: 500,
        borderWidth: 1,
        borderRadius: 10,
        shadowOpacity: 20,
        backgroundColor: commonStyles.cores.branco,
        
        
        },
    
    container: {
        flex: 1,
        backgroundColor: commonStyles.cores.azul,
    },
    containerBox: {
        flexDirection: 'column',
        flex: 1,
        padding: 30,
        margin: '5%',
        backgroundColor: commonStyles.cores.branco,
        borderWidth: 1,
        borderRadius: 25,
    },
    borda: {
        
        borderBottomWidth: 2,
        maxWidth: 400,
        marginBottom: 5,
        marginTop: -10,
    },

    options: {
        flexDirection: 'column', 
        alignItems: 'center',
    },
    titulo: {
        paddingTop: 15,
        fontWeight: 'bold',
        fontSize: 30,       
    },
    texto: {
        fontSize: 20,
    },

    input: {
        fontSize: 15,
        marginTop: 15,
        marginBottom: 5,
        
        borderWidth: 1,
        borderColor: '#111',
        borderRadius: 25,
        paddingLeft: 25,
    },
    inputModal: {
        
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        width: 'auto',
        borderWidth: 1,
        borderRadius: 25,
        padding: 10,
        
        
    },
 
    clicavelModal: {
        flexDirection: 'row',
        backgroundColor: commonStyles.cores.branco,
        borderWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 25,
        margin: 15,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#00D9E7',

    },
    clicavel: {
        
        margin: 20,
        backgroundColor: commonStyles.cores.branco,
        borderWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 25,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#00D9E7',
    },
})

