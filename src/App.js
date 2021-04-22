import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Coffee from './Coffee';
import CokeZero from './CokeZero';
import Water from './Water';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route exact path='/'><VendingMachine /></Route>
     <Route exact path='/coffee'><Coffee /></Route>
     <Route exact path='/cokezero'><CokeZero /></Route>
     <Route exact path='/water'><Water /></Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
