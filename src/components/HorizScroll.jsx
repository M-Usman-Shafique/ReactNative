import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HorizScroll() {
  return (
    <View>
      <Text style={styles.heading}>Horizontal Scroll</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>more</Text>
        </View>
      </ScrollView>
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
  container: {
    flex: 1,
    // borderWidth: 3,
    // borderColor: 'white',
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 5,
  },
});
