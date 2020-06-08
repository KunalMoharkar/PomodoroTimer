import React from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';
import Constants from 'expo-constants';

const Header=props=>{
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    alignSelf:'stretch',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    backgroundColor:'black',
    marginTop:Constants.statusBarHeight,
    marginBottom:Constants.statusBarHeight,
    padding:10,
  },

  headerText:{
    fontSize:30,
    color:'white',
  }

})

export default Header;
