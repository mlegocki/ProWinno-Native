import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { WelcomeScreen, PostsScreen } from './components';
import store from './store';
console.disableYellowBox = true;

export const DrawerNav = DrawerNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
  }
);

export const StackNav = StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,

    },
    Posts: {
      screen: PostsScreen,
      navigationOptions: {
        // headerLeft: null
      }
    },
    Drawer: {
      screen: DrawerNav
    }
  },
  {
    initialRouteName: 'Welcome',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1E824C'
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }