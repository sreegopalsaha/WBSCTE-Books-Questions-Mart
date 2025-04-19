import react from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import {Outlet} from 'react-router-dom';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout