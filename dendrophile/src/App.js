import './App.css';
import Form from './components/Form/Form';
import Navbar from "./components/Navbar/Navbar";
import Administration from "./components/Administration/Administration";
import AddCompany from "./components/AddCompany/AddCompany";
import ViewCompany from "./components/ViewCompany/ViewCompany";
import SavedEnv from "./components/SavedEnvironment/SavedEnv";
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <div className="app__main">
          <Switch>
            <Route exact path="/admin">
              <Administration />
            </Route>

            <Route exact path="/addcompany">
              <AddCompany />
            </Route>

            <Route exact path="/viewcompany">
              <ViewCompany />
            </Route>

            <Route exact path="/savedEnvironment">
              <SavedEnv />
            </Route>

            <Route path="/">
              <Form />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
