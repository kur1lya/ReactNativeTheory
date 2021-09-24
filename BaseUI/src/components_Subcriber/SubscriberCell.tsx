import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Queue} from 'react-native-spacing-system';
import { AddpeopleItem } from '../screens/AddPeople';
import SubscriberItem from '../screens/SubscriberItem';
import FollowButton from './FollowButton';

export interface SubscriberCellProps {
  subcriber: SubscriberItem|AddpeopleItem;
  onPressFollowButton: () => void;
  onPress:()=>void
}

const SubscriberCell: FunctionComponent<SubscriberCellProps> = props => {
  return (
    <View  style={styles.styleCell}>
      <Image  style={styles.styleImg} source={props.subcriber.image} />
      <Queue size={45} />
      <View style={styles.styleText}>
        <Text style={styles.styleData}>{props.subcriber.title}</Text>
        <Text style={styles.styleDecription}>
          {props.subcriber.description}
        </Text>
      </View>
     
<FollowButton dataState={props.subcriber.isFollowing} onPress={props.onPressFollowButton} ></FollowButton>

    </View>
  );
};

export default SubscriberCell;

const styles = StyleSheet.create({
  styleText: {
    alignItems: 'center',
  },

  styleCell: {
    height: 67,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'black',
  },
  styleImg: {
    width: 47,
    height: 47,
    borderRadius: 8,
    position: 'absolute',
  },
  styleData: {
    color: 'rgb(77, 81, 128)',
    fontSize: 17,
    fontWeight: 'bold',
  },
  styleDecription: {
    color: 'rgb(181, 182, 221)',
    fontSize: 12,
  },

  buttonStyle: {
    width: 92,
    fontSize: 12,
    position: 'absolute',
    right: 0,
  },
  followButton: {
    height: 23,
    borderRadius: 10,
    backgroundColor: 'rgb(64, 80, 164)',
    color: 'white',
  },
  followingButton: {
    height: 23,
    borderRadius: 30,
    backgroundColor: 'rgba(190, 198, 255, 0.3)',
    color: 'rgb(77, 91, 177)',
  },
});
