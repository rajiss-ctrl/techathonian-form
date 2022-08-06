import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {HashRouter,Routes,Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
        {/* <HashRouter hashType="hashbang"> */}
      <ChakraProvider>
        <HashRouter hashType="hashbang"> 
          <Routes>
            <Route path={"/*"} element={<App />}/>
          </Routes>
        </HashRouter>
      </ChakraProvider>
  </React.StrictMode>
);



