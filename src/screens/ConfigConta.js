import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

const initialState = {
  isVisible: false,
  swapModalTitle: false
}

export default class Config extends Component {
  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  openActivities = props => {
    this.props.navigation.navigate('Configurações');
  };
  
  state = {
    ...initialState
  }

  render() {


    const swapModalTitle = this.state.swapModalTitle;

    return (
      <View>
        <Header
          name={this.props.route.name}
          openDrawer={() => {
            this.openDrawer();
          }}
        />
        <View style={styles.container}>
          <View style={styles.containerBox}>
            <View>
              <Text style={[styles.redefinir]}>Redefinir Email</Text>
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite um novo email"></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Confirme seu novo email"></TextInput>
            </View>

            <TouchableOpacity
              style={styles.clicavel}
              onPress={() => {
                this.setState({isVisible: true});
                this.setState({swapModalTitle: true});
              }}>
              <Text style={styles.texto}>Redefinir</Text>
            </TouchableOpacity>

            <View>
              <Text style={[styles.redefinir]}>Redefinir Senha</Text>
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Digite uma nova senha"></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua nova senha"></TextInput>
            </View>

            <TouchableOpacity
              style={styles.clicavel}
              onPress={() => {
                this.setState({isVisible: true});
                this.setState({swapModalTitle: false});
              }}>
              <Text style={styles.texto}>Redefinir</Text>
            </TouchableOpacity>

            <Modal
              animationType={'fade'}
              transparent={true}
              visible={this.state.isVisible}
              onRequestClose={() => {
                this.setState({isVisible: false});
                this.setState({swapModalTitle: false});
              }}>
              <View style={styles.centeredView}>
                <TouchableOpacity
                  style={styles.sairTela}
                  onPress={() => {
                    this.setState({isVisible: null});
                  }}></TouchableOpacity>
                <View style={styles.modalView}>
                  {swapModalTitle ? (
                    <Text style={styles.titulo}>
                      Para redefinir seu email digite sua senha:{' '}
                    </Text>
                  ) : (
                    <Text style={styles.titulo}>
                      Para redefinir, digite sua senha atual:{' '}
                    </Text>
                  )}
                  <TextInput
                    style={[styles.inputModal]}
                    placeholder="Digite sua senha"></TextInput>
                  <View
                    style={[
                      {flexDirection: 'row', justifyContent: 'space-around'},
                    ]}>
                    <TouchableOpacity
                      style={styles.clicavelModal}
                      onPress={() => {
                        this.setState({isVisible: false});
                      }}>
                      <Text style={styles.texto}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.clicavelModal}
                      onPress={() => {
                        this.setState({isVisible: false});
                      }}>
                      <Text style={styles.texto}>Redefinir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: commonStyles.cores.branco,
    width: '87%',
    maxHeight: '70%',
    borderRadius: 10,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  container: {
    backgroundColor: commonStyles.cores.azul,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBox: {
    backgroundColor: commonStyles.cores.branco,
    width: commonStyles.containerWhite.width,
    height: commonStyles.containerWhite.height,
    borderWidth: commonStyles.containerWhite.borderBottomWidth,
    borderRadius: commonStyles.containerWhite.borderRadius,
    elevation: commonStyles.containerWhite.elevation,
  },
  redefinir: {
    fontSize: 20,
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    marginTop: 20,
  },
  titulo: {
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  texto: {
    fontSize: 20,
  },

  input: {
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
      height: commonStyles.buttons.shadowOffset.height,
    },
    shadowOpacity: commonStyles.buttons.shadowOpacity,
    shadowRadius: commonStyles.buttons.shadowRadius,
    elevation: commonStyles.buttons.elevation,
  },
  inputModal: {
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
      height: commonStyles.buttons.shadowOffset.height,
    },
    shadowOpacity: commonStyles.buttons.shadowOpacity,
    shadowRadius: commonStyles.buttons.shadowRadius,
    elevation: commonStyles.buttons.elevation,
  },

  clicavelModal: {
    marginTop: 20,
    width: '30%',
    marginBottom: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    backgroundColor: commonStyles.cores.azul,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  clicavel: {
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
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
