import { CallToActionSharp } from "@material-ui/icons";
import {
  AddMoreToTicket,
  AddLessToTicket,
  deleteAllInTicket,
} from "./../actions/addTicket";

const initialState = {
  items: [],
  precioFinal: 0,
};

const AddOrNotTicketProducts = (state = initialState, action) => {
  switch (action.type) {
    case AddMoreToTicket:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            id: action.item.id,
            nombre: action.item.nombre,
            precio: action.item.precio,
            categoria: action.item.categoria,
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

    case deleteAllInTicket:
      return Object.assign({}, state, {
        items: [],
        precioFinal: 0,
      });

    default:
      return state;
  }
};

export default AddOrNotTicketProducts;
