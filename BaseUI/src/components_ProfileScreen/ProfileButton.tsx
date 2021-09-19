import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Queue} from 'react-native-spacing-system';

interface ProfileButtonProp{
  onPress?: ()=>void;

}

export class ProfileButton extends Component<ProfileButtonProp> {
  render() {
    return (
          <TouchableOpacity onPress = {this.props.onPress}>
            <Text style={styles.textStyleEdit}>Edit</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textStyleEdit: {
    color: 'white',
    fontSize: 15,
  },
});

export default ProfileButton;
