import React from 'react';
import './App.css';
import { BrowserRouter,Route} from "react-router-dom"
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/signup'>
          <Signup></Signup>

        </Route>

        
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
