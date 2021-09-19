import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Profile extends Component {
  render() {
    return (
      <View >
        <Text style={styles.textStyleProfile}>My profile</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
    textStyleProfile: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    
  });
export default Profile;
