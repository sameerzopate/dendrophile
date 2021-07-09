import "./App.css";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Administration from "./components/Administration/Administration";
import AddCompany from "./components/AddCompany/AddCompany";
import ViewCompany from "./components/ViewCompany/ViewCompany";
import SavedEnv from "./components/SavedEnvironment/SavedEnv";
import ViewAnalysis from "./components/ViewAnalysis/ViewAnalysis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app__main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/admin">
            <Administration />
          </Route>
          <Route path="/CollectWaste">
                <CollectWaste/>
            </Route>
          <Route path="/addcompany">
            <AddCompany />
          </Route>
          <Route exact path="/viewcompany">
            <ViewCompany name="Company's Data" />
          </Route>

          <Route exact path="/savedEnvironmentAdmin">
            <SavedEnv />
          </Route>

          <Route exact path="/viewAdminAnalysis">
            <ViewAnalysis />
          </Route>

          <Route exact path="/viewAdmin">
            <ViewCompany name="Nirma" />
          </Route>
          {/* use as necessary below root and don't forget to import*/}
          <Route path="/Form">
                <Form />
          </Route>
          <Route path="/Navbar">
                <Navbar />
            </Route>
            <Route path="/SelectedCompanyDetails3">
                <SelectedCompanyDetails3/>
            </Route>
            <Route path="/TotalWasteCollection">
                <TotalWasteCollection/>
            </Route>
            <Route path="/ViewWasteCollector">
                <ViewWasteCollector/>
            </Route>
            <Route path="/AddWasteCollector">
                <AddWasteCollector />
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
            {/* up to this  */}

          <Route exact path="/viewCompanyAnalysis">
            <ViewAnalysis />
          </Route>

          <Route exact path="/savedEnvironmentCompany">
            <SavedEnv />
          </Route>

          <Route path="/">
            <Form />
          </Route>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
