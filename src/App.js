import React from 'react';
import './App.scss';
import './Header/Header';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';
import StickyFooter from './Sticky Footer/StickyFooter';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='main'>
          <Cart />
        </div>
        <Footer />
        <StickyFooter />
    </div>
  );
}

export default App;
