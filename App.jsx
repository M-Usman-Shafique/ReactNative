import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Header from './src/screens/Header';
import {Alert, Button} from 'react-native';
import Example from './src/screens/Example';

const Stack = createNativeStackNavigator();

const sayHello = () => Alert.alert('Hello, User');

const HeaderTitle = () => (
  <Button title="One" color="green" onPress={sayHello} />
);

const HeaderRight = () => <Example />;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {},
      //   headerTitleStyle: {},
      //   headerTintColor: {},
      //   contentStyle: {},
      // }}
      >
        <Stack.Screen
          name="Header"
          component={Header}
          options={{
            title: '',
            headerTitle: HeaderTitle,
            headerRight: HeaderRight,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login Form',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white',
            },
            contentStyle: {
              backgroundColor: 'plum',
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
