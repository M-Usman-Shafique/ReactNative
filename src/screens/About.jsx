import {View, Text, Button} from 'react-native';
import React from 'react';

export default function About(props) {
  const {username} = props.route.params || {};

  return (
    <View>
      <Text>About Page</Text>
      <Text>Welcome, {username ? username : 'Guest'}</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}
