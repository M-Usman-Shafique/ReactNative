import React from 'react';
import {View, Text, FlatList } from 'react-native';
import styles from '../stylesheets/styles';
import { users } from '../utils/data';

const FlatListing = () => {

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.username}>{item.username}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default FlatListing;
