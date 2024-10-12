import {View, Text, SectionList} from 'react-native';
import React from 'react';
import styles from '../stylesheets/styles';
import { products } from '../utils/data';

const SectionListing = () => {

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