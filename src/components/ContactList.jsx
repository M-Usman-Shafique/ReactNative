import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {avatars} from '../utils/data';

export default function ContactList() {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Contact List</Text>
      {avatars.map(({uid, name, status, imageUrl}) => (
        <View key={uid} style={styles.card}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.imageCard}
          />
          <View style={styles.textBox}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    marginBottom: 80,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 14,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  imageCard: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 8,
  },
  textBox: {},
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: '#ccc',
  },
});
