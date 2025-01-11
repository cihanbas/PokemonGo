import React from 'react';
import {Card} from '@models';
import {LIST_ITEM_HEIGHT} from '@utils';
import {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

interface IProps {
  item: Card;
  onPress: (id: string) => void;
}
export const ListItem: FC<IProps> = ({item, onPress}) => {
  return (
    <Pressable style={styles.item} onPress={() => onPress?.(item.id)}>
      <FastImage
        source={{uri: item.images.small}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{item.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    columnGap: 10,
    height: LIST_ITEM_HEIGHT,
  },
  image: {width: 82, height: 114},
});
