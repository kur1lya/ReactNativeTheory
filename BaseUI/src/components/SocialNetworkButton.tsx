import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface SocialNetworkButtonProp {
  image: any;
}

export class SocialNetworkButton extends Component<SocialNetworkButtonProp> {
  render() {
    return (
      <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image style={styles.imageStyles} source={this.props.image}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 45,
    height: 45,
    backgroundColor: 'rgb(255, 103, 97)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 25,
    height: 25,
  },
});

export default SocialNetworkButton;
