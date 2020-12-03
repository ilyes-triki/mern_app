import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactList from "./Components/ContactList";
import Add from "./Components/Add";

function App() {
  return (
    <div className="App">
      <h2>mern_app</h2>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
