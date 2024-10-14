import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Chats = () => (
  <View>
    <Text>Chats</Text>
  </View>
);

const Status = () => (
  <View>
    <Text>Status</Text>
  </View>
);

const Calls = () => (
  <View>
    <Text>Calls</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 18,
          },
        }}>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
