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
      <View style={styles.container}>
        <ScrollView style={styles.scrollStyles}>
          <View style={styles.containerButton}>
            <Pressable>
              <View style={styles.buttonView}>
                <View style={styles.button}>
                  <Image style={styles.avatar} source={require('./assets/favicon.png')} />
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
                  <Image style={styles.avatar} source={require('./assets/favicon.png')} />
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
                  <Image style={styles.avatar} source={require('./assets/favicon.png')} />
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
                <Pressable onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}>
                  <View style={styles.modalButton}>
                    <Text style={styles.title}>Não</Text>
                  </View>
                </Pressable>
                <Pressable>
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
  container: {
    backgroundColor: commonStyles.cores.azul,
    alignItems: 'center',
    height: '100%'
  },
  scrollStyles: {
    width: '87%',
    marginVertical: 25
  },
  containerButton: {
    backgroundColor: commonStyles.cores.branco,
    marginBottom: 15,
    borderWidth: 0.5,
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5
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
    borderWidth: 0.5,
    borderRadius: 25,
    backgroundColor: commonStyles.cores.azul,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
    width: 100,
    height: 50,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5

  }
})