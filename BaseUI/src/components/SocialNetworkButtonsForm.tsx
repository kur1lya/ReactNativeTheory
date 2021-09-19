import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import SocialNetworkButton from './SocialNetworkButton';
import {Queue, Stack} from 'react-native-spacing-system';

let size = 11;

export class SocialNetworkButtonsForm extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <SocialNetworkButton
          image={require('../Icons/facebook.png')}></SocialNetworkButton>
        <Queue size={size} />

        <SocialNetworkButton
          image={require('../Icons/google.png')}></SocialNetworkButton>
        <Queue size={size} />

        {Platform.OS == 'ios' && (
          <SocialNetworkButton
            image={require('../Icons/apple.png')}></SocialNetworkButton>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
  },
});

export default SocialNetworkButtonsForm;
