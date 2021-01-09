import {
  AddMoreToTicket,
  AddLessToTicket,
  deleteAllInTicket,
} from "./../actions/addTicket";

const initialState = {
  items: [],
  precioFinal: 0,
  ticket: [],
};

const AddOrNotTicketProducts = (state = initialState, action) => {
  switch (action.type) {
    case AddMoreToTicket:
      if (state.items.some((item) => item.nombre === action.item.nombre)) {
        let itemAnterior = state.ticket.filter(
          (item) => item.nombre === action.item.nombre
        );
        if (itemAnterior[0].cantidad === 0) {
          itemAnterior[0].cantidad = 1;
          itemAnterior[0].precioTotalProducto = action.item.precio;
        }
        let cantidadAnterior = itemAnterior[0].cantidad + 1;
        let precioTotal =
          itemAnterior[0].precioTotalProducto + action.item.precio;

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
          ticket: [
            ...state.ticket.filter(
              (item) => item.nombre !== action.item.nombre
            ),
            {
              nombre: action.item.nombre,
              cantidad: cantidadAnterior,
              precioTotalProducto: precioTotal,
            },
          ],
        });
      } else {
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
          ticket: [
            ...state.ticket,
            {
              nombre: action.item.nombre,
              cantidad: 1,
              precioTotalProducto: action.item.precio,
            },
          ],
        });
      }

    case AddLessToTicket:
      // state.items = state.items.filter((item) => item.id != action.item.id);
      let pos = state.items
        .map(function (e) {
          return e.nombre;
        })
        .indexOf(action.item.nombre);
      let posTicket = state.ticket
        .map(function (e) {
          return e.nombre;
        })
        .indexOf(action.item.nombre);
      if (pos > -1) {
        state.items.splice(pos, 1);
        state.ticket[posTicket] = {
          nombre: state.ticket[posTicket].nombre,
          cantidad: state.ticket[posTicket].cantidad - 1,
          precioTotalProducto:
            state.ticket[posTicket].precioTotalProducto - action.item.precio,
        };
        return Object.assign({}, state, {
          items: [...state.items],
          precioFinal: state.precioFinal - action.item.precio,
          ticket: [...state.ticket],
        });
      } else {
        return state;
      }

    case deleteAllInTicket:
      return Object.assign({}, state, {
        items: [],
        precioFinal: 0,
        ticket: [],
      });

    default:
      return state;
  }
};

export default AddOrNotTicketProducts;
