import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  ListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import Background from '../components_Subcriber/Background';
import SubscriberCell from '../components_Subcriber/SubscriberCell';
import useEmail from '../hooks/useEmail';

export interface SubscriberItem {
  image: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: boolean;
  id: number;
}
let selectedId: number;

const SubscriberScreen = () => {

  const [subcribers, setSubcribers] = useState<SubscriberItem[]>([
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VanGogh-starry_night.jpg/1502px-VanGogh-starry_night.jpg',
      },
      title: 'First User',
      description: 'Description...',
      isFollowing: true,
      id: 1,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VanGogh-starry_night.jpg/1502px-VanGogh-starry_night.jpg',
      },
      title: 'Second User',
      description: 'Description...',
      isFollowing: true,
      id: 2,
    },
  ]);







  const renderItem = (itemsProps: ListRenderItemInfo<SubscriberItem>) => {
    return (
      <SubscriberCell
        subcriber={itemsProps.item}
        onPressFollowButton={(id) => {
          setSubcribers(subcribers.map(item => {
            if (item.id ==id ) {
              return {...item, isFollowing: !item.isFollowing};
            }
        
            return {...item};
          }));
        }}
     
      />
    );
  };

  return (
    <Background title={'Subcribers'}>
      <FlatList
        style={styles.textContainer}
        data={subcribers}
        renderItem={renderItem}
      ></FlatList>
    </Background>
  );
};

export default SubscriberScreen;

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
  },
});
