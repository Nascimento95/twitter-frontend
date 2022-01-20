import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Messages from './pages/Messages';
import { UserContextProvider } from './contexts/User';




const App = () => {
  return (
    <BrowserRouter>
       <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/homePage" element={<HomePage/>} />
          <Route exact path="/userPage" element={<UserPage/>} />
          <Route exact path="/messages" element={<Messages/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;