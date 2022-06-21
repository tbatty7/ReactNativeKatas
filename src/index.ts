import {combineReducers} from '@reduxjs/toolkit';
import {ticketSlice} from './TicketSlice';

export const appReducer = combineReducers({
  ticket: ticketSlice.reducer,
});
