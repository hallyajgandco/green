import React from'react';
import './styles/App.css';
import Banner from './component/banner';
import './styles/banner.css';
import Cart from './component/cart';
function App() {
  return (
    <div className="App">
      <Banner />
      <Cart />
    </div>
  );
}

export default App;
