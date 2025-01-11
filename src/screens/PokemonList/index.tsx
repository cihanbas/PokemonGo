import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const PokemonListScreen = () => {
  useEffect(() => {
    // console.log('test');
  }, []);

  return (
    <View style={styles.container}>
      <Text>PokemonListScreen</Text>
    </View>
  );
};

export {PokemonListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
