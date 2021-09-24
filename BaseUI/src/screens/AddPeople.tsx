import React, {useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  ListRenderItemInfo,
  SectionList,
  SectionListRenderItem,
  SectionListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import Background from '../components_Subcriber/Background';
import SubscriberCell from '../components_Subcriber/SubscriberCell';

export interface AddpeopleItem {
  image: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing: any;
  id:number
}

const Addpeople = () => {
//   const [selectedId, setSelectedId] = useState(true);

  const [subcribers, setSubcribers] = useState<AddpeopleItem[]>([
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

  const renderItem = (itemsProps: ListRenderItemInfo<AddpeopleItem>) => {
    return (
      <SubscriberCell
        subcriber={itemsProps.item}
        onPressFollowButton={() => {
          setSubcribers(x);
        }}
        onPress={()=>{
        }
        
        }
        
      />
    );
  };

  return (
    <Background title={'Subcribers'}>
      {/* <SectionList
        style={styles.textContainer}
        sections={subcribers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        // extraData={selectedId}

        /> */}
          
    
    </Background>
  );
};

export default Addpeople;

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
  },
});
