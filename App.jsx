import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import HorizScroll from './src/components/HorizScroll';
import ActionCard from './src/components/ActionCard';
import RowCards from './src/components/RowCards';
import ContactList from './src/components/ContactList';
import Grid from './src/images/gridy.jpg';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'purple'}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="rgba(0,0,0,0.01)"
        hidden={false}
        translucent={true}
      />
      <ScrollView>
        <ImageBackground source={Grid} blurRadius={7} style={{flex: 1}}>
          <RowCards />
          <HorizScroll />
          <ActionCard />
          <ContactList />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
