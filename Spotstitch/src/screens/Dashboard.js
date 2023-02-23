import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Post from '../components/Post';
import ImageGrid from '../components/ImageGrid';
import Categories from '../components/Categories';


const Tab = createMaterialTopTabNavigator();

const posts = [
  {
    id: 1,
    username: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor in orci convallis, eu aliquet dui congue.',
    type: 'personal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
  },
  {
    id: 2,
    username: 'Jane Doe',
    text: 'Sed placerat metus id metus dapibus, a posuere lacus hendrerit.',
    type: 'events',
  },
  {
    id: 3,
    username: 'John Doe',
    text: 'Vestibulum vel sapien vel velit facilisis aliquam.',
    type: 'personal',
  },
  {
    id: 4,
    username: 'Jane Doe',
    text: 'Nam interdum risus in diam laoreet, id commodo risus tincidunt.',
    type: 'events',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
  },
];

const MyPostsScreen = () => (
  <View style={styles.container}>
    <Categories />
    <ImageGrid />
    {posts
      .filter((post) => post.type === 'personal')
      .map((post) => (
        <Post key={post.id} username={post.username} text={post.text} image={post.image} />
      ))}
  </View>
);


const FavoritesScreen = () => (
  <View style={styles.container}>
    {posts
      .filter((post) => post.type === 'events')
      .map((post) => (
        <Post key={post.id} username={post.username} text={post.text} image={post.image} />
      ))}
  </View>
);

const Dashboard = () => (
  <Tab.Navigator>
    <Tab.Screen name="Personal" component={MyPostsScreen} />
    <Tab.Screen name="Events" component={FavoritesScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
