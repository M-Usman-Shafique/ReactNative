import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {Button} from 'react-native';

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => (
  <View>
    <Text>Home</Text>
    <Button title="Open Draw" onPress={() => navigation.openDrawer()} />
  </View>
);

const Profile = ({navigation}) => (
  <View>
    <Text>Profile</Text>
    <Button title="Open Draw" onPress={() => navigation.openDrawer()} />
  </View>
);

const Settings = ({navigation}) => (
  <View>
    <Text>Settings</Text>
    <Button title="Open Draw" onPress={() => navigation.openDrawer()} />
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'plum',
            width: 240,
          },
          drawerLabelStyle: {
            color: 'black',
            fontSize: 18,
          },
          // headerStyle: {},
          // headerTintColor: {},
          // headerTitleAlign: {},
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
