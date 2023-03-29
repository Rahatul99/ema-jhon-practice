// import { cloneElement } from "react";
// // use local storage to manage cart data
// const addToDb = id =>{
//     let shoppingCart;

//     //get the shopping cart(last step)
//     const storedCart = localStorage.getItem('shopping-cart')
//     if(storedCart){
//         shoppingCart =JSON.parse(storedCart);
//         console.log(shoppingCart)
//     }
//     else{
//         shoppingCart ={};
//     }

//     const quantity = shoppingCart[id];
//     if(quantity){
//         const newQuantity = +quantity + 1;
//         shoppingCart[id] = newQuantity;
//         // localStorage.setItem(id, newQuantity)
//     }
//     else{
//         shoppingCart[id] = 1;
//         // localStorage.setItem(id, 1);
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     // localStorage.setItem(id, 1);
// }
// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('shopping-cart');
//     if(storedCart){
//         const shoppingCart = JSON.parse(storedCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }
// //not used
// // const deleteShoppingCart = () =>{
// //     localStorage.removeItem('shopping-cart');
// // }
// export {addToDb, removeFromDb}




const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
