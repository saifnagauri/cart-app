import React, { Component } from 'react';
import axios from 'axios';
import CartPage from '../CartPage/CartPage';
import { Route } from 'react-router';
import MainNav from '../../Components/MainNav/MainNav';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import { Link } from 'react-router-dom';

class UserProducts extends Component {
    
    state = {
        products : [],
        categories : ['All'],
        selectedCat : 'All',
        filteredProducts : this.products,
        sortVal : '',
        cartProducts : [],
        selectedProduct : {},
        detailClick : false
    }
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
        .then(
            (result) => {
                this.setState(
                    {
                        products : result.data
                    }
                )
                console.log(this.state.products);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

        axios.get('https://fakestoreapi.com/products/categories')
        .then(
            (result) => {
                this.setState(
                    {
                        categories : this.state.categories.concat(result.data)
                    }
                )
                console.log(this.state.categories);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    }

    selectHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedCat : e.target.value
        })
    }

    
//SORT FUNCTION

    sortHandler = (e) =>{
    console.log(e.target.value);
    let newArr = []
    switch (e.target.value) {
        case 'a-z':
            newArr = this.state.products.sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            })
            break;
        case 'z-a':
            newArr = this.state.products.sort(function(a, b){
                if(a.title > b.title) { return -1; }
                if(a.title < b.title) { return 1; }
                return 0;
            })
            break;
        case 'low-to-high':
            newArr = this.state.products.sort(function(a, b){
                if(a.price < b.price) { return -1; }
                if(a.price > b.price) { return 1; }
                return 0;
            })
            break;
        case 'high-to-low':
            newArr = this.state.products.sort(function(a, b){
                if(a.price > b.price) { return -1; }
                if(a.price < b.price) { return 1; }
                return 0;
            })
            break;
    }
    this.setState(
        {
            products : newArr
        }
    )

    }

    productDetailHandler = (index) =>{
        // this.props.history.push('/userpage/productdetail/'+index)
        // console.log(this.state.products[index]);
        this.setState({
            ...this.state,
            selectedProduct : this.state.products[index],
            detailClick : true
        })
    }

    // addToCartHandler = (index) =>{
    //     const newCartProd = [...this.state.cartProducts]
    //     newCartProd.push(this.state.products[index])
    //     this.setState(
    //         {
    //             cartProducts : newCartProd
    //         }
    //     )
    // }


    addToCartHandler = (item) =>{


        const newCartProd = [...this.state.cartProducts]
        newCartProd.push(this.state.products[item.id-1])

        this.setState(
            {
                cartProducts : newCartProd
            }
        )

        console.log(newCartProd);

    }

    cartValhandler = (data) =>{
        this.setState(
            {
                cartProducts : data
            }
        )
    }

    detailProductAdd = (product) => {

        let cartArr = [...this.state.cartProducts]

        cartArr.push(product)

        this.setState(
            {
                cartProducts : cartArr
            }
        )

    }

    render() {
        let filteredProducts = this.state.products
        if(this.state.selectedCat !== 'All'){
            filteredProducts = this.state.products.filter(
                (result) =>{
                    return result.category === this.state.selectedCat
                }
            )
        }

        return (
            <React.Fragment>
                {
                    this.state.detailClick ? ''
                    : <React.Fragment>
                        <MainNav 
                            cartClicked={ ()=> { this.setState({...this.state,detailClick : true}) } } 
                            cartCount={ this.state.cartProducts.length }>
                        </MainNav>
                        <hr/>
                        <div className="cat-block d-flex justify-content-between align-items-center">
                            <div className="sort-block mr-2">
                            </div>
                            <div className="form-group mr-2">
                                <label>Filter</label>
                                <select 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                onChange={ this.sortHandler }
                                >
                                <option value="a-z">a-z</option>
                                <option value="z-a">z-a</option>
                                <option value="low-to-high">low to high</option>
                                <option value="high-to-low">high to low</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Filter</label>
                                <select 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                onChange={ this.selectHandler }
                                >
                                {
                                    this.state.categories.map(
                                        (category,index) =>{
                                            return (
                                                <option key={index}>{category}</option>
                                            )
                                        }
                                    )
                                }
                                </select>
                            </div>
                        </div>
                        <div className="row">
                    {
                        filteredProducts.map(
                            (item,index)=>{
                                return (
                                    <div
                                    style={{
                                        cursor:'pointer'
                                    }} 
                                    key={index} 
                                    className="col-6 mb-2">
                                        <div className="card">
                                            <img 
                                            className="card-img-top p-3" 
                                            src={item.image} 
                                            alt="Card image cap" 
                                            style={{
                                                width: 'auto',
                                                height : '110px'
                                            }}
                                            />
                                            <div className="card-body">
                                                <h3>&#x24;{item.price}</h3>
                                                <h5 className="card-title product-title"                                             
                                                style={{
                                                    minHeight:'32px'
                                                }}>{ item.title }</h5>
                                                <p className="card-text product-desc"
                                                style={{
                                                    minHeight:'50px'
                                                }}>{item.description}</p>

                                                <div className="cta-action">
                                                <button href="#"
                                                // onClick={ () => this.addToCartHandler(index) } 
                                                onClick={ () => this.addToCartHandler(item) } 
                                                className="btn btn-success mr-2"
                                                >Add To Cart</button>

                                                <Link
                                                to="/userpage/productdetail"
                                                onClick={ () =>this.productDetailHandler(index) } 
                                                className="btn btn-primary"
                                                >View Details</Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                    </React.Fragment>
                }

                {/* <CartPage data={ this.state.cartProducts }></CartPage> */}

                {
                    Object.keys(this.state.selectedProduct).length ? 
                    <Route 
                    path='/userpage/productdetail' 
                    component={() => <ProductDetailPage 
                        detailAdd = { this.detailProductAdd } 
                        backToproducts={ () => this.setState({ detailClick : false }) } 
                        data={ this.state.selectedProduct }>
                        </ProductDetailPage> }/>
                    : ''
                }


                <Route path='/userpage/cartpage' component={() => <CartPage 
                cartVal = { this.cartValhandler } 
                cartBack={ () => this.setState({ detailClick : false }) } 
                data={ this.state.cartProducts }>

                </CartPage> }/>

                {/* <Route path='/userpage/productdetail' component={() => <ProductDetailPage data={ this.state.selectedProduct }></ProductDetailPage> }/> */}
                
                {/* <UserProducts></UserProducts> */}
                {/* <Route path='/productDetail' component={ () => <CartPage data={ this.state.cartProducts }></CartPage> }></Route> */}
                {/* <Route path="/productDetail" component={ ProductDetailPage }></Route> */}
                

            </React.Fragment>
        );
    }
}

export default UserProducts;
