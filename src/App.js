import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Empleados from "./Components/Empleados";
import Compra from "./Components/Compra";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Empleados" exact component={Empleados} />
          <Route path="/Compra" exact component={Compra} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
