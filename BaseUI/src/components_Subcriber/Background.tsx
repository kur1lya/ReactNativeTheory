import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface BackItems {
  title?: string;
}

export class Background extends Component<BackItems> {
  render() {
    return (
      <ImageBackground style={styles.backgrounImageStyle} source={image}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={styles.backgrounImageStyle}>

          <View style={styles.textContainer}>
            <Text style={styles.textStyleProfile}>{this.props.title}</Text>
          </View>

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
    flex: 5,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },

  textStyleProfile: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Background;
