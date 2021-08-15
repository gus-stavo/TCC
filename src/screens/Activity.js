import React, { Component } from 'react'
import { StyleSheet, Alert, Modal, Pressable, Text, Image, View, Linking, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '../commonStyles'

const initialState = {
  modalVisible: false,
}

export default class Activity extends Component {

  state = {
    ...initialState
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(this.setState({ modalVisible: !this.state.modalVisible }));
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Nome da Atividade</Text>
                <View style={styles.modalSubTitle}>
                  <Icon size={40} style={styles.iconStyle} name='account-supervisor-outline'></Icon>
                  <Text style={styles.textButton}>02 / 10</Text>
                </View>
                <ScrollView>
                  <View style={styles.containerMember}>
                    <Pressable>
                      <View style={styles.memberView}>
                        <View style={styles.member}>
                          {/* <Image style={styles.avatar} source={require('./assets/favicon.png')} /> */}
                          <View>
                            <Text style={styles.title}>Futebol</Text>
                            <Text style={styles.description}>Membro</Text>
                          </View>
                        </View>
                        <View style={styles.iconStyle}>
                          <Icon size={40} name='dots-vertical' />
                        </View>
                      </View>
                    </Pressable>
                  </View>
                  
                </ScrollView>
                <Pressable onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                  <View style={styles.modalButton}>
                    <Text>Sair</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* <Image
            style={styles.ativImage}
            source={require('./assets/favicon.png')} /> */}
          <Pressable>
            <View style={styles.buttons}>
              <Icon size={40} style={styles.iconStyle} name='calendar-month-outline'></Icon>
              <Text style={styles.textButton}>20/10/2021</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => this.setState({ modalVisible: true })}>
            <View style={styles.buttons}>
              <Icon size={40} style={styles.iconStyle} name='account-supervisor-outline'></Icon>
              <Text style={styles.textButton}>02 / 10</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Linking.openURL('maps://app?saddr=100+101&daddr=-23.95228173797863+-46.29807281710111')}>
            <View style={styles.buttons}>
              <Icon size={40} style={styles.iconStyle} name='map-marker-outline'></Icon>
              <Text style={styles.textButton}>Rua Albino Marques Nabeto, 36, Guarujá, SP</Text>
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
    backgroundColor: commonStyles.cores.azul,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  mainContainer: {
    backgroundColor: commonStyles.cores.branco,
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
  iconStyle: {
    width: 40,
    height: 40,
    marginLeft: 5,
    color: commonStyles.cores.preto
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
    backgroundColor: commonStyles.cores.branco,
    width: '87%',
    maxHeight: '70%',
    borderRadius: 10,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20
  },
  modalSubTitle: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    borderBottomWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '25%',
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
    backgroundColor: commonStyles.cores.branco,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    margin: 70,
    marginTop: 25,
    marginBottom: 0,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    backgroundColor: commonStyles.cores.azul,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: commonStyles.cores.preto,
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
    borderRadius: 20,
    height: 40,
    margin: '25%',
    marginBottom: 20,
    width: '50%',
    marginTop: 10,
    backgroundColor: commonStyles.cores.azul,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  containerMember: {
    backgroundColor: commonStyles.cores.branco,
    marginBottom: 15,
    borderWidth: 0.5,
    borderRadius: 30,
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  },
  memberView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  member:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  description: {
    fontSize: 12,
    color: 'rgb(124, 124, 124)'
  },
  title: {
    fontSize: 20,
    color: commonStyles.cores.preto
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 20,
    marginRight: 10
  }
})