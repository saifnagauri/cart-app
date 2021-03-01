import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import CartPage from '../CartPage/CartPage';

function ProductDetailPage(props) {
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct(
            props.data
        )
    }, [props.data])

    let history = useHistory()
    const backBtnHandler = () =>{
        history.goBack()
        props.backToproducts()
    }

    const productAddHandler = (product) =>{
        console.log(product);

        props.detailAdd(product)

    }

    return (
        <React.Fragment>
            <hr/>
            <div class="card" >
                <img 
                class="card-img-top p-3 rounded mx-auto d-block" 
                src={product.image} alt={ product.name } 
                style={{
                    maxWidth:'300px'
                }}
                />
                <div class="card-body">
                    <h2>&#36;  {product.price} </h2>
                    <h5 class="card-title"> {product.title} </h5>
                    <p class="card-text"> {product.description} </p>
                </div>
                <div class="card-body text-right">
                <button
                    className="btn btn-outline-success mr-3"
                    onClick={ () => productAddHandler(product) }
                    >Add To Cart</button>
                    <button
                    onClick={ backBtnHandler } 
                    className="btn btn-outline-danger"
                    >Back To The Products</button>
                </div>
            </div>


        </React.Fragment>
    )
}

export default ProductDetailPage
