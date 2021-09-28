import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface FilledButtonProp {
  title: string;
  onPress?: ()=>void;
}

export class FilledButton extends Component<FilledButtonProp> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text   style={styles.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgb(64, 80, 164)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FilledButton;
