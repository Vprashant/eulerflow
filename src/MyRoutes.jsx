import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';


const MyRoutes = () => { 
  return (
    <Routes>
      {/* <Route path='/logs' element={<LogConsole />} />
      <Route exact path='/blogs' element={<BlogMainPage />} />
      <Route path="/blogs/:id" element={<BlogReadPage />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/demo" element={< OpenDemo/>} /> */}
    </Routes>
  );
};

export default MyRoutes; 
