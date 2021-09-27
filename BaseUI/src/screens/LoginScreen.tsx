import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Queue, Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import SocialNetworkButtonsForm from '../components/SocialNetworkButtonsForm';
import TextButton from '../components/TextButton';
import useDeviceOrientation from '../hooks/useDeviceOrientation';
import useEmail from '../hooks/useEmail';

interface LoginScreenState {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const orientation = useDeviceOrientation()




  return (
    <BackgroundForm>
      <CredentialTextInput
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder={'email'}
      />
      <Stack size={15} />

      <CredentialTextInput
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
        placeholder={'password'}
      />
      <Stack size={30} />

      <TextButton title={'Forget password?'} />
      <Stack size={40} />

      <FilledButton
        onPress={() => console.log('"Sign in " button was pressed', email,password)}
        title={'Sign in'}
      />
      <Stack size={18} />

      <Text style={styles.orSignWithTextStyle}>Or sign with</Text>
      <Stack size={18} />

      <SocialNetworkButtonsForm></SocialNetworkButtonsForm>
      <Stack size={30} />

      <TextButton title={'Don’t have an account?'}></TextButton>
    </BackgroundForm>
  );
};

const styles = StyleSheet.create({
  orSignWithTextStyle: {
    color: 'rgb(181,182,221)',
    fontSize: 13,
  },
});

export default LoginScreen;
