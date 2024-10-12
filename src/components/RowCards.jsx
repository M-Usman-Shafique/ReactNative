import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useOrient} from '../hooks/useOrient';

export default function RowCards() {
  const {isLandscape} = useOrient();

  const styles = createStyles(isLandscape);

  return (
    <View style={{marginTop: 30}}>
      <Text style={styles.heading}>Row Cards</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => console.log('Red is pressed...')}
          style={[styles.card, styles.cardRed]}>
          <View>
            <Text style={styles.text}>Red</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('Blue is pressed...')}
          style={[styles.card, styles.cardBlue]}>
          <View>
            <Text style={styles.text}>Blue</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('Green is pressed...')}
          style={[styles.card, styles.cardGreen]}>
          <View>
            <Text style={styles.text}>Green</Text>
          </View>
        </Pressable>
      </View>
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
      flexDirection: 'row',
      padding: 8,
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: isLandscape ? 200 : 100,
      borderRadius: 5,
      margin: 8,
    },
    cardRed: {
      backgroundColor: 'red',
    },
    cardBlue: {
      backgroundColor: 'blue',
    },
    cardGreen: {
      backgroundColor: 'green',
    },
    text: {
      color: 'white',
      fontSize: isLandscape ? 36 : 22,
    },
  });
};
