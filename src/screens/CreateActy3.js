import React, {Component, state} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import commonStyles from '../commonStyles';

export default class Contact extends Component {
  state = {
    Problema: '',
    switchValue: false,
    currentPosition: 2,
  };
  toggleSwitch = value => {
    this.setState({switchValue: value});
  };

  render() {
    return (
      <View style={styles.containerTop}>
        <View style={styles.containerBotTittle}>
          <View style={styles.inputTittleView}>
            <View style={styles.switchStyle}>
              <Text style={styles.inputTittle}>Limitar participantes:</Text>
              <View>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={this.state.switchValue}></Switch>
              </View>
            </View>
          </View>
          {this.state.switchValue && (
            <>
              <TextInput
                style={styles.inputAtividade}
                keyboardType="numeric"
                placeholder="Digite o número de participantes"
                maxLength={2}></TextInput>
            </>
          )}
          <View style={styles.inputDescricao}>
            <Text style={styles.inputTittle}>Descrição:</Text>
          </View>
          <View style={styles.sugestionPlaceBox}>
            <TextInput
              style={{fontSize: 20}}
              multiline={true}
              onSubmitEditing={Keyboard.dismiss}
              returnKeyType="none"
            />
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.editedProfileButton}>
              <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: commonStyles.cores.azul,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  containerBotTittle: {
    backgroundColor: commonStyles.cores.branco,
    width: commonStyles.containerWhite.width,
    height: commonStyles.containerWhite.height,
    borderWidth: commonStyles.containerWhite.borderBottomWidth,
    borderRadius: commonStyles.containerWhite.borderRadius,
    elevation: commonStyles.containerWhite.elevation,
  },
  inputAtividade: {
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
    height: commonStyles.buttons.height,
    padding: 10,
  },
  switchStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTittle: {
    fontSize: 20,
    marginBottom: 6,
  },
  inputTittleView: {
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  inputDescricao: {
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  sugestionPlaceBox: {
    marginHorizontal: commonStyles.buttons.marginHorizontal,
    marginTop: commonStyles.buttons.marginTop,
    marginBottom: 20,
    height: '40%',
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
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  editedProfileButton: {
    marginHorizontal: commonStyles.exitButton.marginHorizontal,
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
    elevation: 5
  },
});
