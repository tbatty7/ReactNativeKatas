import {createTicket, initialState, ticketSlice} from '../TicketSlice';

describe('TicketSlice', () => {
  it('adds ticket total to ticket', () => {
    expect(
      ticketSlice.reducer(initialState, createTicket({totalPrice: '12.00'})),
    ).toEqual({totalPrice: '12.00'});
  });
});
