import React, {Component, useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import Follows from '../components_ProfileScreen/Follows';
import Profile from '../components_ProfileScreen/Profile';
import ProfileButton from '../components_ProfileScreen/ProfileButton';
import useEmail from '../hooks/useEmail';


const image = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};
export const ProfileScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [followers, setFollowers] = useState<string>('236');
  const [following, setFollowing] = useState<string>('342');
  const [value, setvalue] = useState<boolean>(true);
  const [gmail, error, setGmail] = useEmail(email);

  let viewState = () => {
    if (value) {
      console.log(username, email, followers, following, value, image);
    } else {
      setvalue(!value);
      Keyboard.dismiss();
    }
  };

  return (
    <ImageBackground style={styles.backgrounImageStyle} source={image}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.backgrounImageStyle}>
        <View style={styles.textContainer}>
          <Text>
            <Profile />
          </Text>
          {value ? (
            <View style={styles.textStyleButton}>
              <ProfileButton onPress={() => setvalue(!value)} />
            </View>
          ) : (
            <View />
          )}
        </View>

        <View style={styles.viewStyle}>
          {value ? (
            <Follows
              followers_profile={followers}
              following_profile={following}
            />
          ) : (
            <View></View>
          )}
          <Stack size={30} />

          <CredentialTextInput
            onChangeText={username => setUsername(username)}
            showSoftInputOnFocus={!value}
            value={username}
            placeholder={'Username'}
          />
          <Stack size={10} />
          <CredentialTextInput
            onChangeText={email => setEmail(email)}
            showSoftInputOnFocus={!value}
            value={email}
            placeholder={'Email'}
          />
          {/* EMAIL VALIDATION */}
          <Text style={styles.errorStyle}>{value?'':error}</Text>

          <View style={styles.styleButton}>
            <FilledButton
              onPress={() => viewState()}
              title={value ? 'Show state' : 'Update profile'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: 'rgb(222, 69, 60)',
  },

  styleButton: {
    width: '100%',
    marginTop: 'auto',
  },

  viewStyle: {
    width: '100%',
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },

  backgrounImageStyle: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  textStyleButton: {
    position: 'absolute',
    right: 20,
  },
});

export default ProfileScreen;
