import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default class Config extends Component {

  openActivities = props => {
    this.props.navigation.navigate('Configurações')
  }
  state = {
    switchValue: false,    
    Problema: '',
  }
  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.containerBox}>
          <View style={styles.containerItem}>
            <Text style={styles.titulo}>Tema escuro</Text>
            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.titulo}>Estilo</Text>
              <Picker
                mode='dropdown'
                style={styles.pickerView}
                selectedValue={this.state.problem}
                onValueChange={(itemValue) =>
                  this.setState({ problem: itemValue})
                }
                placeholder='Selecione'>

                <Picker.Item label="Arial" value="Arial" />
                <Picker.Item label="Pesca" value="Pesca" />
                <Picker.Item label="Esgrima" value="Esgrima" />
                <Picker.Item label="Basquete" value="Basquete" />
                <Picker.Item label="Caminhada" value="Caminhada" />
              </Picker>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgba(111, 222, 552, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  containerBox: {
    backgroundColor: '#FFF',
    width: '87%',
    height: '92%',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  titulo: {
    fontSize: 25,
  },
  pickerView: {
    borderWidth: 1,
    borderRadius: 20,
    width: '50%',
    height: 30,
    justifyContent: 'center',    
    opacity: 1  
  },
})