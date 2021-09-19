import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export interface CredentialTextInputProp {
  placeholder?: string;
  secureTextEntry?: boolean;
  title?: string;
  value?: string;
  showSoftInputOnFocus?:boolean
  onChangeText?: (text: string) => void;
}

export class CredentialTextInput extends Component<
  CredentialTextInputProp,
  {}
> {
  render() {
    const styles = StyleSheet.create({
      textInputStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgb(181, 182, 221)',
        width: '100%',
        fontSize: 15,
        paddingVertical: 8,
      },
    });
    return (
      <TextInput
      showSoftInputOnFocus={this.props.showSoftInputOnFocus}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
        style={styles.textInputStyle}></TextInput>
    );
  }
}

export default CredentialTextInput;
