import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Stats=(props)=>{
    return(
        <View style={styles.statsContainer}>
            <View >
                <Text style={styles.statsText}>Work : {props.workCount}</Text>
                <Text style={styles.statsText}>Break : {props.breakCount}</Text>
                <Text style={styles.statsText}>Long Break : {props.longBreakCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:10,
        borderBottomColor:'#ff0370',
        borderBottomWidth:2,
    }, 
    statsText:{
        color:'white',
    }  
})