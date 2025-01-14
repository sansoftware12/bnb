import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
// import { useNavigation } from '@react-navigation/native';

// const days = 7;

const Post = (props) => {

  const post = props.post;

//   const navigation = useNavigation();

//   const goToPostPage = () => {
//     navigation.navigate('Post', {postId: post.id});
//   }

  return (
    // <Pressable onPress={goToPostPage} style={styles.container}>
    //   {/* Image  */}
    //  

    //   {/* Bed & Bedroom  */}
     

    //   {/* Type & Description */}
    //   <Text style={styles.description} numberOfLines={2}>
    //     {post.type}. {post.title}
    //   </Text>

    //   {/*  Old price & new price */}
    //   <Text style={styles.prices}>
    //     <Text style={styles.oldPrice}>${post.oldPrice}</Text>
    //     <Text style={styles.price}>  ${post.newPrice} </Text>
    //     / night
    //   </Text>

    //   {/*  Total price */}
    //   <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    // </Pressable>
    <View style={styles.container}>
         <Image
         style={styles.image}
         source={{uri: post.image}}
      />
      {/* <Text>{post.image}</Text> */}
       <Text style={styles.bedrooms}>{post.bed}  bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description}> {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>${post. newPrice} </Text>
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice}</Text>

    </View>
    
  );
};

export default Post;