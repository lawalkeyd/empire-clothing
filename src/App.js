import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation';
import Home from "./routes/home";
import SignIn from "./routes/sign-in"

function App() { 
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>

    );      

}

export default App;
