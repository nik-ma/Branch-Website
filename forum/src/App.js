git // import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Herosection/>
        <Switch>
          
        </Switch>
        
      </Router>
    
    </>
  );
}

export default App;
