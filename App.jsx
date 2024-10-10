import {View, Text, Button, TextInput} from 'react-native';
import React, { useState } from 'react';
import styles from './src/stylesheets/styles';

const App = () => {
  const [name, setName] = useState("Usman");
  const [inpName, setInpName] = useState("");
  const getName = () => {
    setName(inpName);
  }
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 700}}>Hello, {name}</Text>
      <Text>This is just a sample paragraph.</Text>
      <TextInput onChangeText={(data) => setInpName(data)} placeholder="Enter a name..." style={styles.inp}/>
      <Button title="Press" onPress={getName}/>
    </View>
  );
};

export default App;
