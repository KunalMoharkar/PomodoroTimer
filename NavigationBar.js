import React from 'react';
import {Text, View, StyleSheet} from 'react-native' ;
import NavigationBar from 'react-native-navbar';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',

  },
  navbar:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
    flexDirection:'row',
    backgroundColor:'#040466',
    padding: Constants.StatusBarHeight,
  },
  navItem:{
    color:'#c1c91e',
    fontSize:30,
  },
})

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Pomodoro Timer',
  style: styles.navItem,
};

const Navigationbar=()=>{
  return(
    <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          ContainerStyle={styles.navbar}
          rightButton={rightButtonConfig}
          tintColor='#43434a'
          hideAnimation='fade'
        />
    </View>
  )
}



export default Navigation
