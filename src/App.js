import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/Home" exact component={Home} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
