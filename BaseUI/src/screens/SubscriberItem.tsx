import React, {useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  ListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import Background from '../components_Subcriber/Background';
import SubscriberCell from '../components_Subcriber/SubscriberCell';

interface SubscriberItem {
  image: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: any;
  id:number
}

const SubscriberItem = () => {
  const [selectedId, setSelectedId] = useState(true);

  const [subcribers, setSubcribers] = useState<SubscriberItem[]>([
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VanGogh-starry_night.jpg/1502px-VanGogh-starry_night.jpg',
      },
      title: 'First User',
      description: 'Description...',
      isFollowing: true,
      id:1

      
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VanGogh-starry_night.jpg/1502px-VanGogh-starry_night.jpg',
      },
      title: 'First User',
      description: 'Description...',
      isFollowing: true,
      id:2

      
    }
    
  ]);

  let x = subcribers.map(item => {
    return {...item, isFollowing: !item.isFollowing};
  });

  console.log(subcribers);

  const renderItem = (itemsProps: ListRenderItemInfo<SubscriberItem>) => {
    // const Background = itemsProps.item.id ===selectedId? false:true
    return (
      <SubscriberCell
        subcriber={itemsProps.item}
        onPressFollowButton={() => {
          setSubcribers(x);
        }}
        onPress={()=>{
          // setSelectedId(itemsProps.item.id.toString)
        }
        
        }
        
      />
    );
  };

  return (
    <Background title={'Subcribers'}>
      <FlatList
        style={styles.textContainer}
        data={subcribers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedId}

        >
          
        </FlatList>
    </Background>
  );
};

export default SubscriberItem;

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
  },
});
