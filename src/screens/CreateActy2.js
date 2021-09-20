import React, {Component, state} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import commonStyles from '../commonStyles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const initialState = {
  localizacao: '',
  latitude: 0,
  longitude: 0,
};

export default class Contact extends Component {
  state = {
    ...initialState,
  };

  render() {
    return (
      <View style={styles.containerTop}>
        <View style={styles.containerBotTittle}>
          <View style={styles.container1}>
            <Text style={styles.EditableText}>Selecione sua Localização</Text>
            <TextInput
              style={styles.inputAtividade}
              placeholder="Digite sua localização:"
            />
          </View>
          <View style={styles.avatarContainer}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}>
              <Marker
                coordinate={{latitude: -23.95214, longitude: -46.29811}}
                title={'marker.title'}
                description={'marker.description'}
              />
            </MapView>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.editedProfileButton}
              onPress={() => {
                this.props.navigation.navigate('Etapa 3');
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
  avatarContainer: {
    width: '100%',
    height: '50%'

  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginHorizontal: commonStyles.buttons.marginHorizontal,
    marginVertical: 20
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
    padding: 10,
  },
  EditableText: {
    margin: 20,
    marginTop: 30,
    marginBottom: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    fontSize: 20
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
  buttonText: {
      fontSize: 20
  }
})
