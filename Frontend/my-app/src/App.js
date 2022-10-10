
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageNotFound from "./components/pages/pageNotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserDetails from "./components/pages/UserDetails"
 
 
function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component ={Home}></Route>
          <Route exact path="/about" component ={About}></Route>
          <Route exact path="/contact" component ={Contact}></Route>
          
          <Route exact path="/bus/userDetails/:id" component ={UserDetails}></Route>
          <Route exact path="*" component ={PageNotFound}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
