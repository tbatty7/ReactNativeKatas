import {createSlice} from '@reduxjs/toolkit';

export const initialState = {totalPrice: '0.00'};
export const ticketSlice = createSlice({
  name: 'ticket',
  initialState: initialState,
  reducers: {
    createTicket: (state, action) => {
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const {createTicket} = ticketSlice.actions;
