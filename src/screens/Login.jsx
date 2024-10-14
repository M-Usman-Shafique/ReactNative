import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Enter username"
        onChangeText={setUsername}
        value={username}
      />
      <Button
        title="Login"
        onPress={() => {
          console.log('Navigating to About');
          navigation.navigate('About', {username}); // Navigate with username param
        }}
      />
    </View>
  );
}
