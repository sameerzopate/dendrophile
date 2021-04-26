import React from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Navbar from "./Components/Navbar/Navbar";
import Administration from './Components/Administration/Administration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDetails from './Components/Administration/AddCompany/CompanyDetails';
import Header from './Components/Administration/Header';
import ViewCompany from './Components/Administration/ViewCompany/ViewCompany';
import WasteManagementDetails from './Components/Administration/AddCompany/WasteManagementDetails';
import SelectedCompanyDetails1 from './Components/Administration/ViewCompany/SelectedCompanyDetails1';
import SelectedCompanyDetails2 from './Components/Administration/ViewCompany/SelectedCompanyDetails2';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
              <Route path="/Form">
                  <Form />
              </Route>
              <Route path="/Navbar">
                  <Navbar />
              </Route>
              <Route path="/SelectedCompanyDetails2">
                  <SelectedCompanyDetails2/>
              </Route>
              <Route path="/SelectedCompanyDetails1">
                  <SelectedCompanyDetails1/>
              </Route>
              <Route path="/ViewCompany">
                  <ViewCompany/>
              </Route>
              <Route path="/WasteManagementDetails">
                  <WasteManagementDetails/>
              </Route>
              <Route path="/CompanyDetails">
                  <CompanyDetails/>
              </Route>
              <Route path="/">
                  <Administration/>
              </Route>

        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
