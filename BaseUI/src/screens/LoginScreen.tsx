import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Queue, Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkButtonsForm from '../components/SocialNetworkButtonsForm';
import TextButton from '../components/TextButton';

interface LoginScreenState {
  email: string;
  password: string;
}

export class LoginScreen extends React.Component<{}, LoginScreenState> {
  state = {
    email: '',
    password: '',
  };
  
  render() {


    return (
      <BackgroundForm>
        <CredentialTextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder={'email'}
        />
        <Stack size={15} />
        

        <CredentialTextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
          placeholder={'password'}
        />
        <Stack size={30} />

        <TextButton title={'Forget password?'} />
        <Stack size={40} />

        <FilledButton
        onPress={()=>console.log('"Sign in " button was pressed', this.state)}
         title={'Sign in'} />
        <Stack size={18} />

        <Text style={styles.orSignWithTextStyle}>Or sign with</Text>
        <Stack size={18} />

        <SocialNetworkButtonsForm></SocialNetworkButtonsForm>
        <Stack size={30} />

        <TextButton title={'Don’t have an account?'}></TextButton>
      </BackgroundForm>
    );
  }
}

const styles = StyleSheet.create({
  orSignWithTextStyle: {
    color: 'rgb(181,182,221)',
    fontSize: 13,
  },
});

export default LoginScreen;
