import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

function CartPage(props) {
    const [products, setproducts] = useState(props.data);

    useEffect(() => {
        setproducts(props.data)
    }, [props.data]);

    const productDeleteHandler = (index) => {
        const newArr = [...products]
        newArr.splice(index,1)
        setproducts(
            newArr
        )

        
    }

    const history = useHistory()

    const cartBackHandler = () =>{
        // console.log('working');
        history.goBack();
        props.cartBack()

        console.log(products);
        props.cartVal(products)
    }

    return (
        <React.Fragment>
            <hr/>
            <div className="text-right mb-3">
                <button
                onClick={ cartBackHandler } 
                className="btn btn-outline-danger">Back</button>
            </div>
            {
                products.map(
                    (product,index) =>{
                        return(
                            <div key={ index } className="list-group mb-5">
                                <div className="list-group-item" >
                                    <div className="product-item-block d-flex">
                                        <div className="product-img">
                                            <img 
                                            src={ product.image } 
                                            className="rounded" alt="..." style={{
                                                height:'200px',
                                                width:'200px'
                                            }} />
                                        </div>
                                        <div className="produc-detail-block ml-3">
                                            <h3>&#36; {product.price} </h3>
                                            <h5 className="product-name"> {product.title} </h5>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                    <div className="btn-block text-right">
                                        <button 
                                        className="btn btn-outline-success mr-3"                                       
                                        >Buy Now</button>
                                        <button 
                                        className="btn btn-outline-danger"
                                        onClick={ () => productDeleteHandler(index) }
                                        >Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </React.Fragment>
    )
}

export default CartPage
