import { AddMoreToTicket, AddLessToTicket } from "./../actions/addTicket";

const initialState = {
  items: [],
  precioFinal: 0,
};

const AddOrNotTicketProducts = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case AddMoreToTicket:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            id: action.item.id,
            nombre: action.item.nombre,
            precio: action.item.precio,
          },
        ],
        precioFinal: state.precioFinal + action.item.precio,
      });
    case AddLessToTicket:
      // state.items = state.items.filter((item) => item.id != action.item.id);
      let pos = state.items
        .map(function (e) {
          return e.nombre;
        })
        .indexOf(action.item.nombre);
      if (pos > -1) {
        state.items.splice(pos, 1);
        return Object.assign({}, state, {
          items: [...state.items],
          precioFinal: state.precioFinal - action.item.precio,
        });
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default AddOrNotTicketProducts;
