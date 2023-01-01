import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log('product ApI called');

        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {

                setProducts(data);
                console.log('product received');

            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];

            for (const key in savedCart) {

                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;

                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }


    }, [products]);

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.key)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;