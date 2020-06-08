import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

export const Bar=()=>{

    return(
        <View style={styles.bar}></View>
    )
}



const styles=StyleSheet.create({

bar:{

    height:60,
    width:Dimensions.get('window').width/65,
    backgroundColor:"#13e30b",
    paddingLeft: 0,
    paddingRight:0,
    marginLeft:0,
    marginRight:0,
  },

})