import React from 'react'
import { useHistory } from 'react-router';

function MainNav(props) {
    let history = useHistory()
    const toCartHandler = () => {
        history.push('/userpage/cartpage')
        props.cartClicked()
    }

    return (
        <React.Fragment>
                <div className="main-nav text-right">
                    <div className="right-block  d-flex justify-content-between align-items-center">
                        <div className="user-name">
                            <span>Hi</span>
                            <span class="font-weight-bold"> Saif</span>
                        </div>
                        <div className="cart-block border ml-3">

                            <button
                            disabled={!props.cartCount}
                            onClick={ toCartHandler } 
                            className="btn btn-success">You have {props.cartCount} { props.cartCount > 1 ? 'products' : 'product'} in your cart 
                            </button>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default MainNav
