import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PokemonDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PokemonDetail</Text>
    </View>
  );
};

export {PokemonDetailScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
