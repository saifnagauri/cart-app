import React from 'react';

const UserList = (props) => {

    return (
        <React.Fragment>
            <div className="list-group">
                {
                    props.data.map(
                        (user,index)=>{
                            return (
                                <div 
                                key={ index }
                                className="list-group-item"
                                onClick={ () =>props.userSelect(index) }
                                style={{
                                    cursor:'pointer',
                                }}
                                >
                                    <div className="d-flex w-100 mb-2">
                                        <div className="user-image" style={{
                                            minWidth:'100px'
                                        }}>
                                            <img src={ user.picture.large } alt="" className="img-thumbnail" />
                                        </div>
                                        <div className="user-detail">
                                            <div>
                                                <h6 className="mb-0">Name</h6>
                                                <p>{user.name.first} {user.name.last}</p>
                                            
                                            </div>
                                            <div>
                                                <h6 className="mb-0">Email</h6>
                                                <p>{user.email}</p>
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
    );
}

export default UserList;
