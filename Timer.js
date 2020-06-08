import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export const Timer =(props)=>{
    return(
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{props.minutes} : {props.seconds}</Text>         
        </View>
    )
}

export const Panel =(props)=>{
    return(
        <View style={styles.panelContainer}>
            <TouchableOpacity style={styles.panelButtons} onPress={props.workHandler} disabled={props.workDisabled}>
                <Text style={styles.panelButtonText}>Work</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.panelButtons} onPress={props.breakHandler} disabled={props.breakDisabled}>
                <Text style={styles.panelButtonText}>Break</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButtons} onPress={props.longBreakHandler} disabled={props.longBreakDisabled}>
                <Text style={styles.panelButtonText}>Long Break</Text>
            </TouchableOpacity>
        </View>    
    )
}

const styles = StyleSheet.create({

    timerContainer:{
        width:200,
        height:100,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        margin:10,
        borderRadius:4,
      },
      timerText:{
        color:'white',
        fontSize:50,
      },
      panelContainer:{
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        margin:10,
        borderRadius:4,
      },
      panelButtons:{
        backgroundColor:'#110691',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        padding:10,
        borderRadius:4,
      },
      panelButtonText:{
          color:'white',
      }

})

