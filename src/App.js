import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation';
import Home from "./routes/home";
import Authentication from "./routes/authentication"

function App() { 
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>

    );      

}

export default App;
