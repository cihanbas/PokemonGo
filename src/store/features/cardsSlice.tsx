import {CardResponse} from '@models';
import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  cards: CardResponse[];
}

const initialState: CounterState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: state => {
      state.cards = [];
    },
    removeCard: state => {
      state.cards = [];
    },
  },
});

export const {addCard, removeCard} = cardSlice.actions;

export default cardSlice.reducer;
