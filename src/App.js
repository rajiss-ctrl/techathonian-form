
import './App.css';
import SignUp from './pages/register/SignUp';
import Login from './pages/login/Login';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Error from './components/Error';
import Home from './pages/home/Home';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';




function App() {
  const [toggle,setToggle] =useState(false)

const handleToggle = ()=>{
    setToggle(pre=>!pre)    
}
  return (
<>
  <Routes >
    <Route path={'/'} element={<Layout toggle={toggle} handleToggle={handleToggle}/>}>
        <Route index element={<Home/>}/>
        <Route path={'signup'} element={<SignUp/>}/>
        <Route path={'login'} element={<Login/>}/>
        {/*protected route*/}
        <Route element={<ProtectedRoute/>}>
        <Route path={'dashboard'} element={<Dashboard/>}/>
        </Route>
        {/*All*/}
        <Route path={'*'} element={<Error/>}/>
    </Route>
  </Routes>
</>
  );
}
// "homepage": "https://rajiss-ctrl.github.io/techathonian-form",
export default App;