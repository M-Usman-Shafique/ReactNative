import {View, Text, SectionList} from 'react-native';
import React from 'react';
import styles from '../stylesheets/styles';

const SectionListing = () => {
  const products = [
    {
      category: 'Fruits',
      data: [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Mango'},
        {id: 3, name: 'Orange'},
      ],
    },
    {
      category: 'Vegetables',
      data: [
        {id: 4, name: 'Carrot'},
        {id: 5, name: 'Potato'},
        {id: 6, name: 'Tomato'},
      ],
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({section}) => (
    <View>
      <Text style={styles.cat}>{section.category}</Text>
    </View>
  );

  return (
    <View>
      <SectionList
        sections={products}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SectionListing;