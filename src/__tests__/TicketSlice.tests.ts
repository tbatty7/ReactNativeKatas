import {createTicket, initialState, ticketSlice} from '../TicketSlice';

describe('TicketSlice', () => {
  it('adds ticket total to ticket', () => {
    const newState = ticketSlice.reducer(initialState, createTicket('12.00'));
    expect(newState).toEqual({totalPrice: '12.00'});
  });
});
