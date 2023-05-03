import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <div className="smooth-scroll-content"> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Layout;
