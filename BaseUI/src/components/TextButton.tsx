import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FilledButton from './FilledButton';

export interface TextButtonProp {
  title: string;
  color?: string;
  align?: 'flex-start' | 'center';
}

export class TextButton extends Component<TextButtonProp> {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'rgb(64,80,164)',
    fontSize: 13,
  },
});

export default TextButton;
