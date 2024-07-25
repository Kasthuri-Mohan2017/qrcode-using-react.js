/*import React from 'react'
//import Qrcode from './Components/Qrcode/Qrcode'
import Images from './Components/Qrcode/Images/Images'
const App = () => {
  return (
    <>
    <div>
      {/*}<Qrcode/>*/
      /*}<Images/>
      </div>
    </>
  )
}

export default App*/

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hooks from './Components/Hooks/Hooks';
import Detail from './Components/Hooks/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hooks />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

