import React, {Component} from 'react';
import Addpeople from './src/screens/AddPeople';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SubscriberScreen from './src/screens/SubscriberScreen';
import SubscriberItem from './src/screens/SubscriberScreen';

export class App extends Component {
  render() {
    return (
      <ProfileScreen/>
      //  <LoginScreen />
      // <Addpeople/>
      // <SubscriberScreen/>
    );
  }
}

export default App;
