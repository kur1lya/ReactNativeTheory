import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';

const image = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};
export class BackgroundForm extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundImageStyle} source={image}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={styles.backgroundImageStyle}>
          <View style={styles.viewStyle}>{this.props.children}</View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
  backgroundImageStyle: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default BackgroundForm;
