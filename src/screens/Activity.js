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
      <View style={styles.background}>
        <View style={styles.backgroundWhite}>
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
                          <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
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
          <Image style={styles.ativImage} source={require('../../assets/images/avatar.jpg')} />
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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: commonStyles.cores.azul,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  backgroundWhite: {
    backgroundColor: commonStyles.cores.branco,
    width: commonStyles.containerWhite.width,
    height: commonStyles.containerWhite.height,
    borderWidth: commonStyles.containerWhite.borderBottomWidth,
    borderRadius: commonStyles.containerWhite.borderRadius,
    elevation: commonStyles.containerWhite.elevation
  },
  ativImage: {
    width: 'auto',
    height: '25%',
    margin: 20,
    marginBottom: 30,
    borderRadius: 10
  },
  iconStyle: {
    width: commonStyles.iconsSize.width,
    height: commonStyles.iconsSize.height,
    marginLeft: 5,
    color: commonStyles.cores.preto
  },
  textButton: {
    marginHorizontal: 10,
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
    marginHorizontal: commonStyles.buttons.marginHorizontal,
    marginTop: commonStyles.buttons.marginTop,
    marginBottom: commonStyles.buttons.marginBottom,
    height: commonStyles.buttons.height,
    borderWidth: commonStyles.buttons.borderWidth,
    borderRadius: commonStyles.buttons.borderRadius,
    flexDirection: commonStyles.buttons.flexDirection,
    alignItems: commonStyles.buttons.alignItems,
    backgroundColor: commonStyles.cores.branco,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: commonStyles.buttons.shadowOffset.width,
      height: commonStyles.buttons.shadowOffset.height
    },
    shadowOpacity: commonStyles.buttons.shadowOpacity,
    shadowRadius: commonStyles.buttons.shadowRadius,
    elevation: commonStyles.buttons.elevation
  },
  button: {
    marginHorizontal: commonStyles.exitButton.marginHorizontal,
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
    marginHorizontal: commonStyles.exitButton.marginHorizontal,
    marginTop: 15,
    marginBottom: 25,
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
  containerMember: {
    backgroundColor: commonStyles.cores.branco,
    marginBottom: 15,
    borderWidth: commonStyles.buttons.borderWidth,
    borderRadius: commonStyles.buttons.borderRadius,
    marginHorizontal: commonStyles.buttons.marginHorizontal,
    height: commonStyles.buttons.height,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: commonStyles.buttons.shadowOffset.width,
      height: commonStyles.buttons.shadowOffset.height
    },
    shadowOpacity: commonStyles.buttons.shadowOpacity,
    shadowRadius: commonStyles.buttons.shadowRadius,
    elevation: commonStyles.buttons.elevation,
    justifyContent: 'center',
  },
  memberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  member: {
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