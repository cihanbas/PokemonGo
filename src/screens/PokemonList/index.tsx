import {ListItem} from '@components';
import {Card, IStackProps} from '@models';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {LIST_ITEM_HEIGHT} from '@utils';
import {useCards} from '@hooks';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = IStackProps<'List'>;

const PokemonListScreen: React.FC<Props> = ({navigation}) => {
  const {data, fetchNextPage} = useCards();

  const loadMore = () => {
    fetchNextPage();
  };
  const navigateToDetail = (cardID: string) => {
    navigation.navigate('Detail', {id: cardID});
  };
  const renderItem: ListRenderItem<Card> = ({item}) => {
    return <ListItem item={item} onPress={navigateToDetail} />;
  };
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <FlashList
        data={data?.data || []}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        estimatedItemSize={LIST_ITEM_HEIGHT}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export {PokemonListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
