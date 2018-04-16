import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Welcome to ProWinno
        </Text>
        <Button
          title='Go to Job Posts'
          onPress={() => navigation.navigate('Posts', { itemId: 999, name: "Chocolate" })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // dark green
    backgroundColor: '#FAFAFA'
  },
  headline: {
    fontSize: 30,
  }
})