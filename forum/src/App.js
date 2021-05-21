// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import competitions from './components/pages/competitions.js';
import Footer from './components/Footer';
import Hostel from './components/pages/Hostel.js'
import Events from './components/Events/Events'
import mystery from './components/pages/mystery';
function App() {
  return (
    <>
      
      <Router>
        <Navbar />

        
        <Switch>
          <Route path='/' exact component={Herosection}/>
          <Route path='/competitions' component={competitions}/>
          <Route path='/Hostel' component={Hostel}></Route>
          <Route path='/Events' component={Events}></Route>
          <Route path='/mystery' component={mystery}></Route>
        </Switch>
        
      </Router>
      
      <Footer/>
    
    </>
  );
}
export default App;
