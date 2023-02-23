import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post from '../components/Post';

const TrendingScreen = ({ route }) => {
  const { posts } = route.params;

  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} username={post.username} text={post.text} image={post.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default TrendingScreen;
