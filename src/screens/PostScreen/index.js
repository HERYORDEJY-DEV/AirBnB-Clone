import React from 'react';
import {View, Text} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';
import posts from '../../../assets/data/feed';

import places from '../../../assets/data/feed';

const PostScreen = (props) => {
  const route = useRoute();

  // const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={posts[1]} />
    </View>
  );
};

export default PostScreen;
