import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
