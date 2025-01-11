import {useCardExists, usePokemonCardDetail} from '@hooks';
import {IStackProps} from '@models';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CardActionButton} from './components/cardActionButton';

const width = Dimensions.get('screen').width;
type IProps = IStackProps<'Detail'>;
const PokemonDetailScreen: React.FC<IProps> = ({route}) => {
  const id = route.params?.id;
  const {fetchData: data, isFetching} = usePokemonCardDetail(id);
  const {cardExists, addCardToStore, removeCardFromStore} = useCardExists(id);

  if (isFetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      {data && (
        <View>
          <FastImage
            source={{
              uri: data.images.large,
              cache: FastImage.cacheControl.immutable,
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{data.name}</Text>
          <Text>{data.hp}</Text>
          <CardActionButton
            cardExists={cardExists}
            addCardToStore={addCardToStore}
            removeCardFromStore={removeCardFromStore}
          />
        </View>
      )}
    </ScrollView>
  );
};

export {PokemonDetailScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: width,
    height: width * 1.4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
