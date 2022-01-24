import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { UserContextProvider } from './contexts/User';
import AllUsers from './pages/AllUsers';
import Tweet from './pages/Tweet';




const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/homePage" element={<HomePage/>} />
          <Route exact path="/userPage" element={<UserPage/>} />
          <Route exact path="/allUsers" element={<AllUsers/>} />
          <Route exact path="/tweets/:id" element={<Tweet/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;