import React from 'react';
import {Button} from '@components';
import {FC} from 'react';
interface IProps {
  cardExists: boolean;
  addCardToStore: () => void;
  removeCardFromStore: () => void;
}
const CardActionButton: FC<IProps> = ({
  cardExists,
  addCardToStore,
  removeCardFromStore,
}) => {
  const handleButtonPress = () => {
    if (cardExists) {
      removeCardFromStore();
    } else {
      addCardToStore();
    }
  };

  const buttonTitle = cardExists ? 'Remove From Card' : 'Add To Card';

  return <Button title={buttonTitle} onPress={handleButtonPress} />;
};
export {CardActionButton};
