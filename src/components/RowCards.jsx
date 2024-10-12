import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';

export default function RowCards() {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={{marginTop: 30}}>
      <Text style={styles.heading}>Row Cards</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => console.log('Red is pressed...')}
          style={[
            styles.card,
            styles.cardRed,
            {height: windowHeight > 500 ? 100 : 200},
          ]}>
          <View>
            <Text style={styles.text}>Red</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('Blue is pressed...')}
          style={[
            styles.card,
            styles.cardBlue,
            {height: windowHeight > 500 ? 100 : 200},
          ]}>
          <View>
            <Text style={styles.text}>Blue</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('Green is pressed...')}
          style={[
            styles.card,
            styles.cardGreen,
            {height: windowHeight > 500 ? 100 : 200},
          ]}>
          <View>
            <Text style={styles.text}>Green</Text>
          </View>
        </Pressable>
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
  },
});
