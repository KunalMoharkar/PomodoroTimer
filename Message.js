import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


export const Message=(props)=>{
    return(
    <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{props.message}</Text>
    </View>
    )
}

const styles = StyleSheet.create({

    messageContainer:{

        backgroundColor:'black',
        borderRadius:4,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderStyle:'solid',
        borderColor:'#ff0370',
        padding:10,
        borderBottomWidth:2,
        margin:20,
      },
      messageText:{
          color:'white',
      }
    

})
