import React, {Component} from 'react';
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
import Follows from './Follows';
import Profile from './Profile';
import ProfileButton from './ProfileButton';


const image = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};
export class Background_Form extends Component<{}> {
  state = {
    username: '',
    email: '',
    followers: '234',
    following: '526',
    value: true,
  };

  viewState() {
    if (this.state.value) {
      console.log(this.state, image);
    } else {
      this.setState({value: true});
      Keyboard.dismiss();
    }
  }

  render() {
    return (
      <ImageBackground style={styles.backgrounImageStyle} source={image}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.backgrounImageStyle}>
          <View style={styles.textContainer}>
            <Text>
              <Profile />
            </Text>
            {this.state.value ? (
              <View style={styles.textStyleButton}>
                <ProfileButton onPress={() => this.setState({value: false})} />
              </View>
            ) : (
              <View />
            )}
          </View>

          <View style={styles.viewStyle}>
            {this.state.value ? (
              <Follows
                followers_profile={this.state.followers}
                following_profile={this.state.following}
              />
            ) : (
              <View></View>
            )}
            <Stack size={30} />

            <CredentialTextInput
              onChangeText={username => this.setState({username})}
              showSoftInputOnFocus={!this.state.value}
              value={this.state.username}
              placeholder={'Username'}
            />
            <Stack size={10} />
            <CredentialTextInput
              onChangeText={email => this.setState({email})}
              showSoftInputOnFocus={!this.state.value}
              value={this.state.email}
              placeholder={'Gmail'}
            />

            <View style={styles.styleButton}>
              <FilledButton
                onPress={() => this.viewState()}
                title={this.state.value ? 'Show state' : 'Update profile'}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
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

export default Background_Form;
