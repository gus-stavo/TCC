import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Header from '../components/Header';
import commonStyles from '../commonStyles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const initialState = {
  name: '',
  cep: '',
  state: '',
  city: '',
  district: '',
  street: '',
  number: '',
  editMode: false,
};

export default class Profile extends Component {
  state = {
    ...initialState,
  };

  save = () => {
    this.props.onSave(this.editedProfile);
  };

  buscaCep = async () => {
    let response = await fetch(
      `https://viacep.com.br/ws/${this.state.cep}/json/`,
    );

    let json = await response.json();

    this.setState({
      state: json.uf,
      city: json.localidade,
      district: json.bairro,
      street: json.logradouro,
    });
  };

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  editModeM = () => {

    if(!this.state.editMode) {
      this.setState({editMode: !this.state.editMode})
      
    }
    else {
      this.setState({editMode: !this.state.editMode})
      Alert.alert('Editado com sucesso');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            name={this.props.route.name}
            openDrawer={() => {
              this.openDrawer();
            }}
          />
        </View>
        <View style={styles.containerTop}>
          <View style={styles.containerAvatar}>
            <Avatar
              rounded
              title="GS"
              size="xlarge"
              style={styles.avatar}
              titleStyle={{color: '#eee'}}
            />
          </View>
          <View style={[styles.containerIcon, {justifyContent: this.state.editMode ? 'space-between' : 'flex-end'}]}>
            {!this.state.editMode && (
              <TouchableOpacity
                onPress={this.editModeM}>
                <Icon name="account-edit-outline" size={40} color="#222" />
              </TouchableOpacity>
            )}
            {this.state.editMode && (
              <>
                <TouchableOpacity
                  onPress={() => {this.setState({editMode: !this.state.editMode})}}>
                  <Icon name="close" size={40} color="#222" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.editModeM}>
                  <Icon name="check" size={40} color="#222" />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        <ScrollView>
          <View style={styles.containerInfo}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              editable={this.state.editMode ? true : false}
              onChangeText={name => this.setState({name})}
              placeholder="Atualize seu nome">
              {this.state.name}
            </TextInput>

            <Text style={styles.label}>CEP:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              onEndEditing={this.buscaCep}
              editable={this.state.editMode ? true : false}
              onChangeText={cep => this.setState({cep})}
              placeholder="Atualize seu CEP">
              {this.state.cep}
            </TextInput>

            <Text style={styles.label}>Estado:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              editable={this.state.editMode ? true : false}
              onChangeText={state => this.setState({state})}
              placeholder="Atualize seu estado">
              {this.state.state}
            </TextInput>

            <Text style={styles.label}>Cidade:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              editable={this.state.editMode ? true : false}
              onChangeText={city => this.setState({city})}
              placeholder="Atualize sua cidade">
              {this.state.city}
            </TextInput>

            <Text style={styles.label}>Bairro:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              editable={this.state.editMode ? true : false}
              onChangeText={district => this.setState({district})}
              placeholder="Atualize seu bairro">
              {this.state.district}
            </TextInput>

            <Text style={styles.label}>Rua:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              editable={this.state.editMode ? true : false}
              onChangeText={street => this.setState({street})}
              placeholder="Atualize sua rua">
              {this.state.street}
            </TextInput>

            <Text style={styles.label}>Número:</Text>
            <TextInput
              style={[
                styles.text,
                {color: this.state.editMode ? '#929292' : 'black'},
              ]}
              editable={this.state.editMode ? true : false}
              onChangeText={number => this.setState({number})}
              placeholder="Atualize seu número">
              {this.state.number}
            </TextInput>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.cores.branco,
  },
  containerTop: {
    backgroundColor: commonStyles.cores.azul,
    borderBottomWidth: 0.5,
    elevation: 5,
  },
  containerAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: commonStyles.cores.preto,
  },
  containerIcon: {
    flexDirection: 'row',
    padding: 15,
  },
  containerInfo: {
    marginHorizontal: commonStyles.buttons.marginHorizontal,
    marginBottom: 50,
  },
  label: {
    marginTop: 50,
    fontFamily: 'Exo2-Medium',
    fontSize: 20,
    color: commonStyles.cores.preto,
  },
  btn: {
    marginHorizontal: commonStyles.exitButton.marginHorizontal,
    marginTop: 10,
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
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnText: {
    fontSize: 20,
    color: '#222',
    fontFamily: 'Exo2-Medium',
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  EditText: {
    marginRight: 50,
    textAlign: 'right',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    borderBottomWidth: 0.5,
    padding: 10,
    color: 'black',
  },
  editText: {
    marginTop: 20,
    fontSize: 20,
    borderBottomWidth: 1,
    width: 300,
    padding: 10,
    color: '#929292',
  },
});
