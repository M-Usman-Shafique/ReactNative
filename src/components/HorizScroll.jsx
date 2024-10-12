import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useOrient} from '../hooks/useOrient';

export default function HorizScroll() {
  const {isLandscape} = useOrient();

  const styles = createStyles(isLandscape);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Horizontal Scroll</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>To</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>more</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = isLandscape => {
  return StyleSheet.create({
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
      width: isLandscape ? 200 : 100,
      height: isLandscape ? 200 : 100,
      marginHorizontal: 8,
      borderRadius: 5,
    },
    text: {
      fontSize: isLandscape ? 30 : 20,
      color: 'black',
    },
  });
};
