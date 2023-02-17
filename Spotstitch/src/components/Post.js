import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Post = ({ username, text, image, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.footer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 8,
  },
  footer: {
    padding: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default Post;
