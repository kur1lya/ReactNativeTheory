import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class BackgroundForm extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgrounImageStyle} source={image}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={styles.backgrounImageStyle}>
          <View style={styles.viewStyle}>{this.props.children}</View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const image = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

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

  backgrounImageStyle: {
    justifyContent: 'flex-end', 
    flex: 1,
  },
});

export default BackgroundForm;
