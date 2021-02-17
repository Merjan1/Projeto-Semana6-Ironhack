import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
import MovieDetail from './MovieDetail';
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/movies/:id' component={MovieDetail} />
    </BrowserRouter>
  );
}

export default App;
