import {createTicket, initialState, ticketSlice} from '../TicketSlice';

describe('TicketSlice', () => {
  it('adds ticket total to ticket', () => {
    const input = {totalPrice: '12.00'};
    const newState = ticketSlice.reducer(initialState, createTicket(input));
    expect(newState).toEqual({totalPrice: '12.00'});
  });
});
