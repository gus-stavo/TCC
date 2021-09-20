import React, {Component, state, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  TouchableHighlight,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import commonStyles from '../commonStyles';

const initialState = {
  problema: 'Escolha',
  switchValue: false,
  currentPosition: 0,
};

export default class Contact extends Component {
  state = {
    ...initialState,
  };

  toggleSwitch = value => {
    this.setState({switchValue: value});
  };

  render() {
    const problem = this.state.problem;
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.containerAvatar}>
            <Avatar rounded title="GS" size="xlarge" style={styles.avatar} />
          </View>
          <View style={styles.inputTittleView}>
            <Text style={styles.inputTittle}>Nome da Atividade:</Text>
          </View>
          <View>
            <TextInput style={styles.inputAtividade} />
          </View>
          <View style={styles.inputTittleView}>
            <Text style={styles.inputTittle}>Selecione o grupo:</Text>
          </View>
          <View style={styles.pickerView}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.problem}
              onValueChange={itemValue => this.setState({problem: itemValue})}
              placeholder="Selecione">
              <Picker.Item label="Futebol" value="Futebol" />
              <Picker.Item label="Pesca" value="Pesca" />
              <Picker.Item label="Esgrima" value="Esgrima" />
              <Picker.Item label="Basquete" value="Basquete" />
              <Picker.Item label="Caminhada" value="Caminhada" />
            </Picker>
          </View>
          <View style={styles.inputTittleView}>
            <View style={styles.switchStyle}>
              <Text style={styles.inputTittle}>Usar senha:</Text>
              <Switch
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
              />
            </View>
          </View>
          {this.state.switchValue && (
            <View>
              <TextInput
                style={styles.inputAtividade}
                placeholder="Digite a Senha"
              />
              <TextInput
                style={styles.inputAtividade}
                placeholder="Confime a Senha"
              />
            </View>
          )}
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.editedProfileButton}
              onPress={() => {
                this.props.navigation.navigate('Etapa 2');
              }}>
              <Text style={styles.buttonText}>Proxima</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonStyles.cores.azul,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  mainContainer: {
    backgroundColor: commonStyles.cores.branco,
    width: commonStyles.containerWhite.width,
    height: commonStyles.containerWhite.height,
    borderWidth: commonStyles.containerWhite.borderBottomWidth,
    borderRadius: commonStyles.containerWhite.borderRadius,
    elevation: commonStyles.containerWhite.elevation,
  },
  containerAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 75,
    backgroundColor: commonStyles.cores.preto,
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
  pickerView: {
    borderWidth: commonStyles.buttons.borderWidth,
    borderRadius: commonStyles.buttons.borderRadius,
    height: commonStyles.buttons.height,
    justifyContent: 'center',
    backgroundColor: commonStyles.cores.branco,
    shadowColor: commonStyles.cores.preto,
    shadowOffset: {
      width: commonStyles.buttons.shadowOffset.width,
      height: commonStyles.buttons.shadowOffset.height,
    },
    shadowOpacity: commonStyles.buttons.shadowOpacity,
    shadowRadius: commonStyles.buttons.shadowRadius,
    elevation: commonStyles.buttons.elevation,
    marginHorizontal: commonStyles.buttons.marginHorizontal,
    marginTop: commonStyles.buttons.marginTop,
    marginBottom: commonStyles.buttons.marginBottom,
  },
  inputTittleView: {
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  inputTittle: {
    fontSize: 20,
    marginBottom: 6,
  },
  switchStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  editedProfileButton: {
    marginHorizontal: commonStyles.exitButton.marginHorizontal,
    marginTop: 25,
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
});
