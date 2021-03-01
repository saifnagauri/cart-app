import React, { Component } from 'react';

class UserDeatil extends Component {


    backClickhandler = () => {
        this.props.backClick()
    }
    
    render() {
        return (
            <React.Fragment>
                <hr/>
                <div className="card">
                    <img 
                    style={
                        {
                            maxWidth:'200px'
                        }
                    }
                    className="card-img-top" 
                    src={this.props.user.picture.large} 
                    alt={this.props.user.name.first} 
                    /
                    >
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.user.name.first} {this.props.user.name.last} 
                            </h5>
                        <p className="card-text">
                            <span className="font-weight-bold">Email Id: </span>
                            {this.props.user.email} 
                            </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h6 className="mb-0">Phone : </h6>
                            { this.props.user.phone }
                            </li>
                        <li className="list-group-item">
                            <h6 className="mb-0">Address</h6>
                            {this.props.user.location.street.number},
                            {this.props.user.location.street.name},
                            {this.props.user.location.state},
                            {this.props.user.location.postcode},
                            {this.props.user.location.country}                                  
                        </li>
                    </ul>
                    <div className="card-body text-right">
                        <button 
                        onClick = { this.backClickhandler }
                        className="btn btn-outline-danger">Back</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserDeatil;
