import React, {useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  ListRenderItemInfo,
  SectionList,
  SectionListData,
  SectionListProps,
  SectionListRenderItem,
  SectionListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import Subscriber_Cell from '../components_AddPeople/Subcriber_Cell';
import Background from '../components_Subcriber/Background';
import SubscriberItem from './SubscriberScreen';


export interface AddpeopleItem {

  data: [{
    image: ImageSourcePropType;
    title: string;
    description: string;
    isFollowing: any;
    id: number;
  }] 
}





const Addpeople = () => {  
  const [subcribers, setSubcribers] = useState<AddpeopleItem[]>([
    {
      data: [
        {
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VanGogh-starry_night.jpg/1502px-VanGogh-starry_night.jpg',
          },
          title: 'First User',
          description: 'Description...',
          isFollowing: true,
          id: 1,
        },
      ],
    },
    {

      data: [
        {   image: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/VanGogh-starry_night.jpg/1502px-VanGogh-starry_night.jpg',
        },
        title: 'Second User',
        description: 'Description...',
        isFollowing: true,
        id: 2,}
      ],
    },
  ]);
  console.log(subcribers);

  const renderItem = (itemsProps: SectionListRenderItemInfo<AddpeopleItem>) => {
 

  let datax = itemsProps.item.data
  let y = datax.map(e=>{
    return e.isFollowing, e.image, e.title, e.id, e.description
  })
   
    return (null
      // <Subscriber_Cell
      //   subcriber={datax}
     
      //   onPressFollowButton={id => {
      //     setSubcribers(
      //       datax.map(item => {
        
      //         if (item.id===id) {
      //           return {...item, isFollowing: !item.isFollowing};
                
      //         }

      //         return {...item};
      //       }),
      //     );
      //   }}
      // />
    );
  };

  return (
    <Background title={'Subcribers'}>
      {/* <SectionList
        style={styles.textContainer}
        sections={subcribers}
        renderItem={renderItem}
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


