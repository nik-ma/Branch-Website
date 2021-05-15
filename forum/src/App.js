// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import competitions from './components/pages/competitions.js';
function App() {
  return (
    <>
      
      <Router>
        <Navbar />

        
        <Switch>
          <Route path='/' exact component={Herosection}/>
          <Route path='/competitions' component={competitions}/>
        </Switch>
        
      </Router>
    
    </>
  );
}

export default App;
