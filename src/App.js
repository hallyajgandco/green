import React from'react';
import './styles/App.css';
import Banner from './component/banner';
import './styles/banner.css';
import Cart from './component/cart';
import ShoppingList from './component/shoppingList';
function App() {
  return (
    <div className="App">
      <Banner />
      <ShoppingList />
      <Cart />
      
    </div>
  );
}

export default App;
