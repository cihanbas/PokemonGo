import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  cards: string[];
}

const initialState: CounterState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<string>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(card => card !== action.payload);
    },
  },
});

export const {addCard, removeCard} = cardSlice.actions;

export default cardSlice.reducer;
