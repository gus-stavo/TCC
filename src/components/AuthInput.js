import React from 'react'
import{ View, TextInput, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '../commonStyles'

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
        width:'90%',
        height:40,
        backgroundColor: commonStyles.cores.branco,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        borderWidth: 1,
        borderColor:commonStyles.cores.preto,
        elevation: 3,
    },
    icon:{
        color:commonStyles.cores.preto,
        marginLeft:20
    },
    input:{
        marginLeft:20,
        width:'100%',
        color: commonStyles.cores.preto,
    }
})