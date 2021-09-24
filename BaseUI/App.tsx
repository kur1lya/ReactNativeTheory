import React, {Component} from 'react';
import Addpeople from './src/screens/AddPeople';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SubscriberItem from './src/screens/SubscriberItem';

export class App extends Component {
  render() {
    return (
      // <ProfileScreen/>
      //  <LoginScreen />
      <SubscriberItem />
      // <Addpeople/>
    );
  }
}

export default App;
