
import React, { Component } from 'react';
import { Route } from 'react-router';
import CartPage from '../CartPage/CartPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import UserProducts from '../UserProducts/UserProducts';
import './UserPage.scss'

class UserPage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <UserProducts></UserProducts> */}
                {/* <Route path="/userpage" component={ UserProducts }></Route> */}
                {/* <Route path="/productDetail" component={ ProductDetailPage }></Route> */}
                {/* <UserPage></UserPage> */}

                <UserProducts></UserProducts>
                {/* <ProductDetailPage></ProductDetailPage> */}
                {/* <CartPage></CartPage> */}

                

            </React.Fragment>
        );
    }
}

export default UserPage;
