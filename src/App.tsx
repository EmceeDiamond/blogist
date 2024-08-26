import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserInformation from './components/UserInformation';
import { useSelector } from 'react-redux';
import { Users } from './types';

function App() {

  const data:any = useSelector((state) => state);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
      setUsers(data)
      console.log(data)
  }, [data])
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage users={users}/>}/>
        <Route path='/user/:id' element={<UserInformation users={users}/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
