import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
      </Router>
    </>
  );
}

export default App;
