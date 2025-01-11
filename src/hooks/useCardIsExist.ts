import {addCard, removeCard, useAppDispatch, useAppSelector} from '@store';

const useCardExists = (cardId: string) => {
  const {cards} = useAppSelector(state => state.cards);
  const dispatch = useAppDispatch();

  const cardExists = cards.includes(cardId);

  const addCardToStore = () => {
    dispatch(addCard(cardId));
  };

  const removeCardFromStore = () => {
    dispatch(removeCard(cardId));
  };

  return {addCardToStore, removeCardFromStore, cardExists};
};

export {useCardExists};
