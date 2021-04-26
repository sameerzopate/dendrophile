
import './App.css';
import Form from './components/Form/Form';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
     <Navbar />
     <Form />
    </div>
>>>>>>> parent of 7dcb097 (Update App.js)
  );
}

export default App;
