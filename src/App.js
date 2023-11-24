import React from 'react';
import {  Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FounderDetails from './components/FounderDetails';




function App() {
  return (
    <div className="App">
<Routes> 
 
   <Route path="/" element={<Home/> } />
   <Route path="/FounderDetails" element ={<FounderDetails/>}/>

</Routes>
    </div>
  );
}
export default App;


