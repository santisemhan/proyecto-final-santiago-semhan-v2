import { AddMoreToTicket, AddLessToTicket } from "./../actions/addTicket";

const initialState = {
  items: [],
};

const AddOrNotTicketProducts = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case AddMoreToTicket:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            nombre: action.item.nombre,
            precio: action.item.precio,
          },
        ],
      });
    case AddLessToTicket:
      return state;
    default:
      return state;
  }
};

export default AddOrNotTicketProducts;
