import React, { useState, Component } from 'react'
import { StyleSheet, Alert, Modal, Pressable, Text, Image, View, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const initialState = {
    modalVisible: false,
}

export default class Activity extends Component {

    state = {
        ...initialState
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(this.setState({ modalVisible: !this.state.modalVisible}));
                    }}
                    >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Nome da Atividade</Text>
                            <View style={styles.modalSubTitle}>                               
                            <Icon size={40} style={styles.iconStyle} name='account-supervisor-outline'></Icon>
                            <Text style={styles.textButton}>02 / 10</Text>
                            </View>
                        <Pressable onPress={() => this.setState({ modalVisible: !this.state.modalVisible})}>
                            <View style={styles.modalButton}>
                            <Text>Sair</Text>                  
                            </View>
                        </Pressable>  
                        </View>
                    </View>
                    </Modal>

                    {/* <Image
                    style={styles.ativImage}
                    source={require('./assets/ativImage.png')}/> */}
                    <Pressable>
                    <View style={styles.buttons}>
                        <Icon size={40} style={styles.iconStyle} name='calendar-month-outline'></Icon>
                        <Text style={styles.textButton}>Data: 20/10/2021</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={() => this.setState({ modalVisible: true })}>
                    <View style={styles.buttons}>
                        <Icon size={40} style={styles.iconStyle} name='account-supervisor-outline'></Icon>
                        <Text style={styles.textButton}>08 / 10</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL('maps://app?saddr=100+101&daddr=-23.95228173797863+-46.29807281710111')}>
                    <View style={styles.buttons}>
                        <Icon size={40} style={styles.iconStyle} name='map-marker-outline'></Icon>
                        <Text style={styles.textButton}>Rua: Albino Marques Nabeto, 36, Guarujá, SP</Text>
                    </View>
                    </Pressable>
                    <Pressable>
                    <View style={styles.buttons}>
                        <Icon size={40} style={styles.iconStyle} name='text'></Icon>
                        <Text style={styles.textButton}>Descrição</Text>
                    </View>
                    </Pressable>
                    <Pressable>
                    <View style={styles.button}>
                        <Text>Sair</Text>
                    </View>
                    </Pressable>
                </View>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00D9E7',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  mainContainer: {
    backgroundColor: '#FFF',
    width: '87%',
    height: '92%',
    borderWidth: 0.5,
    borderRadius: 10,
    elevation: 50
  },
  ativImage: {
    width: 'auto',
    height: '25%',
    margin: 20,
    marginBottom: 30,
    borderRadius: 10
  },
  miniatura: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 0.5
  },
  iconStyle: {
    width: 40,
    height: 40,
    marginLeft: 5      
  },
  textButton: {
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: '#FFF',
    width: '87%',
    height: '70%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20
  },
  modalSubTitle: {
    margin: 20,
    marginTop: 10,
    marginBottom: 5,
    height: 50,
    borderBottomWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center', 
    paddingLeft:  '25%',
  },
  buttons: {
    margin: 20,
    marginTop: 15,
    marginBottom: 0,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5 
  },
  collapseMembers: {
    margin: 20,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  collapseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 5
  },
  collapseBody: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#e8e8e8'
  },
  collapseTitle: {
    fontSize: 20,
    margin: 5
  },
  collapseText:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    margin: 70,
    marginTop: 25,
    marginBottom: 0,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    backgroundColor: '#00D9E7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButton: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    margin: '25%',
    marginBottom: 20,
    width: '50%',
    marginTop: 10,
    backgroundColor: '#00D9E7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  }
})