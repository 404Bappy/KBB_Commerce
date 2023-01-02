import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>By :{seller}</small></p>
                <p>Price: {price} $</p>
                <p><small>Only {stock} left in stock - Order soon!</small></p>
                <button
                    onClick={() => props.handelAddToCart(props.product)}
                    className='btn-regular' >{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;