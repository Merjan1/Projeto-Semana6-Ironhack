import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
