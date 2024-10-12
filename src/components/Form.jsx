import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {object, string} from 'yup';

let userSchema = object({
  username: string().required('Please enter username'),
  email: string().email('Please enter email'),
  password: string().required('Please enter password'),
});

export default function Form() {
  return (
    <View>
      <Text style={styles.heading}>Formik & Yup</Text>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={userSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Enter username"
            />
            {errors.username && (
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {errors.username}
              </Text>
            )}
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Enter email"
            />
            {errors.email && (
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {errors.email}
              </Text>
            )}
            <TextInput
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Enter password"
            />
            {errors.password && (
              <Text style={{color: 'red', alignSelf: 'center'}}>
                {errors.password}
              </Text>
            )}
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
