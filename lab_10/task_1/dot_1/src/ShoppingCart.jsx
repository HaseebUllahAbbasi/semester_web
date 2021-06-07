import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Card } from 'semantic-ui-react';

function ShoppingCart(props) {

    return (

        <div>
            {
                props.cart.length > 0 ? <div className="container"> <h1 className="display-2">Shopping Cart</h1>
                    <div className="row">
                        {
                            props.cart.map(product => (<div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.amount}</p>
                                        <p className="card-text">{product.qty}</p>
                                        <br></br>
                                        <div className="buttons">
                                            <button onClick={() => props.increment(product)} className="btn btn-success">Add One More</button>
                                            <button onClick={() => props.decrement(product)} className="btn btn-warning">Reduce One</button>
                                        </div>
                                        <br></br>
                                        <button onClick={() => props.onRemove(product)} className="btn btn-danger">Remove</button>

                                    </div>
                                </div>
                            </div>))
                        }
                    </div> </div> : <div className="display-5"> No Items Added</div>
            }

        </div>


    );
}

export default ShoppingCart;