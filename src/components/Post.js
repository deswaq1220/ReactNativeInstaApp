import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PostItem from './PostItem'

const postInfo = [
    {
        postTitle: 'uarmyhope',
        postPersonImage: require('../../assets/images/userProfile.jpeg'),
        postImage: require('../../assets/images/post1.jpeg'),
        likes: 218,
        isLiked:false,
    },
    {
        postTitle: 'dlwlrma',
        postPersonImage: require('../../assets/images/profile1.jpeg'),
        postImage: require('../../assets/images/post2.jpeg'),
        likes: 555,
        isLiked:false,
    },
    {
        postTitle: 'go5rae',
        postPersonImage: require('../../assets/images/profile2.jpeg'),
        postImage: require('../../assets/images/post3.jpeg'),
        likes: 111,
        isLiked:false,
    },
    {
        postTitle: 'thv',
        postPersonImage: require('../../assets/images/profile3.jpeg'),
        postImage: require('../../assets/images/post4.jpeg'),
        likes: 1230,
        isLiked:false,
    },
]

const Post = () => {
  return (
   <View>
    {postInfo.map((data, index) => {
        return(
            <PostItem data={data} key={index}/>
        )
    })}
   </View>
  )
}

export default Post