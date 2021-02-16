import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './Home'
import MovieDetail from './MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/movies/:id' component={MovieDetail} />
    </BrowserRouter>
  );
}

export default App;
