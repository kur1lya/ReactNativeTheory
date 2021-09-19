import React, {Component} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {Queue} from 'react-native-spacing-system';

interface FollowsProp {
  followers: string;
  following: string;
  myFunc?:()=>void
}

export class Follows extends Component<FollowsProp> {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.textStyle}>
          <Text style={styles.colorText}>{this.props.followers}</Text>
          <Text>Followers</Text>
          </View>
          <Queue size={50} />
          <View style={styles.textStyle}>
          <Text style={styles.colorText}>{this.props.following}</Text>
          <Text>Followings</Text>
          </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    flexDirection: 'column',
    color: 'rgb(194, 23, 23)',
  },
  colorText: {
    color: 'rgb(194, 23, 23)',
    fontSize:35
  },

  containerStyle: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: 'rgb(181, 182, 221)',
    borderWidth: 1,
    paddingHorizontal: 80,
    paddingVertical: 30,
  },
});

export default Follows;
