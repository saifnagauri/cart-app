import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MainNav from '../../Components/MainNav/MainNav';
import TopHeader from '../../Components/TopHeader/TopHeader';
import AdminPage from '../AdminPage/AdminPage';
import CartPage from '../CartPage/CartPage';
import LoginPage from '../LoginPage/LoginPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import UserDeatil from '../UserDetailPage/UserDeatil';
import UserPage from '../UserPage/UserPage';


class MainPage extends Component {


    render() {
        return (
           <React.Fragment>
                    <TopHeader></TopHeader>

                    {/* <UserPage></UserPage> */}
                  

                   <Switch>
                        <Route path="/" exact component={ LoginPage }></Route>
                        <Route path="/adminpage" component={ AdminPage }></Route>
                        <Route path="/userpage" component={ UserPage }></Route>
                   </Switch>
                    
                    
                    
           </React.Fragment>
        );
    }
}

export default MainPage;
