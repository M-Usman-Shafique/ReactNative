import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useOrient} from '../hooks/useOrient';

export default function Card() {
  const {isLandscape} = useOrient();

  const styles = createStyles(isLandscape);

  const openWebsite = link => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/portrait-young-student-education-day_23-2150980069.jpg',
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Animated Boy</Text>
        <Text numberOfLines={3} style={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          magnam, iure eveniet harum doloribus laborum adipisci magnam, iure
          adipisci magnam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Modi illo quo dolores earum blanditiis, fugit cupiditate atque
          quibusdam tenetur ipsa nemo sint laborum itaque quas, ratione nulla
          aliquam minima sequi..
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => openWebsite('https://www.google.com/')}
            style={styles.btn}>
            <Text style={styles.cardFooter}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              openWebsite('https://www.instagram.com/hafizusman619/')
            }
            style={styles.btn}>
            <Text style={styles.cardFooter}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const createStyles = isLandscape => {
  return StyleSheet.create({
    card: {
      minHeight: 200,
      maxWidth: isLandscape && 280,
      backgroundColor: '#242424',
      borderRadius: 8,
      marginTop: 8,
      marginHorizontal: 5,
    },
    cardImage: {
      height: 200,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    cardBody: {
      padding: 10,
    },
    cardTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardDescription: {
      color: 'white',
      fontSize: 16,
    },
    cardFooter: {
      color: 'black',
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    btn: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
      padding: 5,
      borderRadius: 3,
      marginHorizontal: 3,
    },
  });
};
