import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
const MainOutlet = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default MainOutlet;
