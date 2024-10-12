import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';

export default function ActionCard() {
  return (
    <View>
      <Text style={styles.heading}>Action Card</Text>
      <View style={styles.cardBox}>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 14,
  },
  cardBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
