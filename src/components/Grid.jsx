import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {users} from '../utils/data';

const Grid = () => {
  const data = users;
  return (
    <View>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.gridItem}>
            <Text style={styles.itemText}>{item.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  gridItem: {
    backgroundColor: '#ccc',
    marginBottom: 10,
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default Grid;
