import React from 'react';
import {View, Text, FlatList } from 'react-native';
import styles from '../stylesheets/styles';

const FlatListing = () => {
  const data = [
    {id: 1, skill: 'HTML'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'Java'},
    {id: 4, skill: 'Python'},
    {id: 5, skill: 'Node'},
    {id: 6, skill: 'Express'},
    {id: 7, skill: 'React'},
    {id: 8, skill: 'Next'},
    {id: 9, skill: 'Angular'},
    {id: 10, skill: 'Django'},
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.skill}>{item.skill}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default FlatListing;
