import React from 'react'
import{ View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props =>{
    return(
        <View style={[styles.container, props.style]}> 
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        backgroundColor:'#eee',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        borderWidth: 1,
        borderColor:'#222',
        elevation: 3,
    },
    icon:{
        color:'#222',
        marginLeft:20
    },
    input:{
        marginLeft:20,
        width:'100%',
        color: '#222',
    }
})