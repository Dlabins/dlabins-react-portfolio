// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, Portfolio, Contact, About, Footer} from "./components";


function App() {
 
  return (
    <div  className="App">
     <Router>
      <Header />
      <Switch>
      <Route path="/about" exact component={() => <About />} />
      <Route path="/portfolio" exact component={() => <Portfolio />} />
      <Route path="/contact" exact component={() => <Contact />} />
      </Switch>
      <Footer/>
      </Router>
      
      
  
    </div>
  );
}

export default App;
