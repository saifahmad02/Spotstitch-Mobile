import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

const ImageGrid = () => (
  <View style={styles.container}>
    <ScrollView horizontal>
      <View style={styles.imageContainer}>
        <View style={styles.row}>
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
        </View>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 6,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
});

export default ImageGrid;
