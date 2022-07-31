
import './App.css';
import { Box} from "@chakra-ui/react";
import SignUp from './pages/register/SignUp';
import Login from './pages/login/Login';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
<Box width={'100%'}>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
</Box>

  );
}

export default App;