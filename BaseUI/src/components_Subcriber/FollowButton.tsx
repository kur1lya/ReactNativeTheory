import React, { FunctionComponent } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export interface FollowButtonProp {
title?:string
onPress?:()=>void
press?:()=>void
dataState?:boolean

}
const FollowButton: FunctionComponent<FollowButtonProp> = (props) => {
    
  return (
    <TouchableOpacity  onPress={props.onPress} style={props.dataState?styles.buttonStyle:styles.buttonStyle2}  >
        {props.dataState? <Text style={styles.followButton}>Follow</Text>:
        <Text style={styles.followingButton}>Following</Text>}
        
    </TouchableOpacity>
  );
};

export default FollowButton;


const styles = StyleSheet.create({
  buttonStyle: {
    width: 92,
    height: 23,
    fontSize: 12,
    position: 'absolute',
    borderRadius:30,
    right: 0,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgb(64, 80, 164)',

  },
  buttonStyle2:{
    width: 92,
    height: 23,
    fontSize: 12,
    position: 'absolute',
    borderRadius:30,
    right: 0,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgba(190, 198, 255, 0.3)',
  },

  followButton: {
    color: 'white',

  },
  followingButton: {
    backgroundColor: 'rgba(190, 198, 255, 0.3)',
    color: 'rgb(77, 91, 177)',
  },
});
