import { combineReducers } from "redux";
import addTicket from "./addTicketReducer";

// para crear store siempre se hace a través de reducers nunca de acciones
export default combineReducers({
  addTicket,
});
