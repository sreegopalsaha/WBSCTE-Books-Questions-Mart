import react from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import {Outlet} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function Layout() {
  return (
    <>
    <ScrollToTop/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout