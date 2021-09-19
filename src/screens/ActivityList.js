import React, { Component} from 'react'
import { View, StyleSheet, Pressable, Image, Text, ScrollView, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '../commonStyles'

const initialState = {
  modalVisible: false,
}

export default class ActivityList extends Component {

  state = {
    ...initialState
  }

  render() {

    return (
      <View style={styles.background}>
        <ScrollView style={styles.scrollStyles}>
          <View style={styles.containerButton}>
            <Pressable onPress={() => {this.props.navigation.navigate('Atividade')}}>
              <View style={styles.buttonView}>
                <View style={styles.button}>
                  <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
                  <View>
                    <Text style={styles.title}>Futebol</Text>
                    <Text style={styles.description}>Dono</Text>
                  </View>
                </View>
                <View style={styles.button}>
                  <Icon size={40} name='account-supervisor-outline' />
                  <Text style={styles.title}>2 / 5</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.containerButton}>
            <Pressable>
              <View style={styles.buttonView}>
                <View style={styles.button}>
                <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
                  <View>
                    <Text style={styles.title}>Futebol</Text>
                    <Text style={styles.description}>Membro</Text>
                  </View>
                </View>
                <View style={styles.button}>
                  <Icon size={40} name='account-supervisor-outline' />
                  <Text style={styles.title}>4 / 5</Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.containerButton}>
            <Pressable>
              <View style={styles.buttonView}>
                <View style={styles.button}>
                <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
                  <View>
                    <Text style={styles.title}>Futebol</Text>
                    <Text style={styles.description}>Membro</Text>
                  </View>
                </View>
                <View style={styles.button}>
                  <Icon size={40} name='account-supervisor-outline' />
                  <Text style={styles.title}>2 / 5</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </ScrollView>
        <View style={styles.plusView}>
          <Pressable onPress={() => { this.setState({ modalVisible: true }) }}>
            <View style={styles.plus}>
              <Icon size={40} name='plus' />
            </View>
          </Pressable>
        </View>

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
              <Text style={styles.modalTitle}>Deseja criar uma atividade?</Text>
              <View style={styles.modalButtons}>
                <Pressable onPress={() => {this.setState({ modalVisible: !this.state.modalVisible })}}>
                  <View style={styles.modalButton}>
                    <Text style={styles.title}>Não</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => {this.props.navigation.navigate('Etapa 1')}}>
                  <View style={styles.modalButton}>
                    <Text style={styles.title}>Sim</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
  scrollStyles: {
    width: commonStyles.containerWhite.width,
    marginVertical: 25
  },
  containerButton: {
    backgroundColor: commonStyles.cores.branco,
    marginBottom: 15,
    borderWidth: commonStyles.buttons.borderWidth,
    borderRadius: commonStyles.buttons.borderRadius,
    height: 60,
    justifyContent: 'center',
    shadowColor: commonStyles.cores.preto,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: commonStyles.buttons.shadowOffset.width,
      height: commonStyles.buttons.shadowOffset.height
    },
    shadowOpacity: commonStyles.buttons.shadowOpacity,
    shadowRadius: commonStyles.buttons.shadowRadius,
    elevation: commonStyles.buttons.elevation
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 20,
    marginRight: 10
  },
  description: {
    fontSize: 12,
    color: 'rgb(124, 124, 124)'
  },
  title: {
    fontSize: 20,
    color: commonStyles.cores.preto
  },
  plus: {
    backgroundColor: commonStyles.cores.branco,
    borderWidth: 0.5,
    borderRadius: 20,
  },
  plusView: {
    width: '87%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row'
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
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 25,
    marginTop: 25,
    color: commonStyles.cores.preto
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    
  },
  modalButton: {
    marginHorizontal: commonStyles.exitButton.marginHorizontal,
    marginTop: 30,
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

  }
})