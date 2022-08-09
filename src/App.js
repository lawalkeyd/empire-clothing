import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation';
import Home from "./routes/home";
import Authentication from "./routes/authentication"
import Shop from "./routes/shop/shop.component"
import Checkout from './routes/checkout';

function App() { 
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>

    );      

}

export default App;
