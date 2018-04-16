import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PostsScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { itemId, name } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Here are a bunch of Posts!
        </Text>
        <Text style={styles.headline}>
          Wowwwweee
        </Text>
        <Text style={styles.headline}>
          Props!!! {itemId}, {name}
        </Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
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
    fontSize: 16,
  }
})