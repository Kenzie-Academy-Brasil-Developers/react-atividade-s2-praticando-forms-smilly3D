import "./App.css";
import Form from "./components/Formulario";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Cadastrados from "./page/Cadastrados";

function App() {
  const [user, setUser] = useState([]);

  console.log(user);
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Form user={user} setUser={setUser} />
          </Route>
          <Route exact path="/Cadastrados">
            <Cadastrados user={user} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
