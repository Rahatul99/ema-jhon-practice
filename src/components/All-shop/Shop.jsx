import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Shop-product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    //state for cart
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    //to use db stored data 
    useEffect(()=>{
        const storedCart = getShoppingCart();//we get previously stored cart in db where we just set id and we get only id that added to the cart,,,but we have needed full array of product of those id thats why we do below(we also have quantity at getShoppingCart f)
        const savedCart = [];
        for(const id in storedCart){
                const savedProduct = products.find(product => product.id === id)
                if(savedProduct){
                    const quantity = storedCart[id]; //that means we want that id's quantity
                    savedProduct.quantity =quantity;//we just take products and we set DB quantity to those product what previously added to the cart;
                    //on the left hand quantity was zero before

                    savedCart.push(savedProduct);
                }
            
            // const savedProduct = products.find(product => product.id === id)
            // const quantity = storedCart[id]; //that means we want that id's quantity
            // savedProduct.quantity =quantity;//we just take products and we set DB quantity to those product what previously added to the cart;
        }
        setCart(savedCart);
    },[products])

    //sideEffect for cart
    const handleAddToCart = (product)=>{
        console.log(product)//here we got array without quantity before setCart(savedCart) after setCart we also got product with quantity
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    const removeCart = (id) =>{
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart} removeCart={removeCart}></Product>)}
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};
export default Shop
// export  {Shop}