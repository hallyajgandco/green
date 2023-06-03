import React from'react';


function Cart(){
    const monsteraPrice= 8;
    const ivyPrice= 10;
    const rosePrice= 12;
    return (
        <div className='g-cart'>
            <h2>Cart</h2>
            <ul >
                <li>Monstera : prix ={monsteraPrice}$</li>
                <li>Ivy : prix ={ivyPrice}$</li>
                <li>Rose : prix ={rosePrice}$</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + rosePrice} $;
        </div>
    );
}

export default Cart;