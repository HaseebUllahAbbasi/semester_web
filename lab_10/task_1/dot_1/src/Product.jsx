import { Button } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function Product (props)
{
    return (

            <div className="col-sm-4">
                <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
                    <p className="card-text">{props.quantity}</p>
                    <button onClick={()=> props.onAdd({id: props.id,name:props.name, amount:props.price})} className="btn btn-primary">Add to Cart</button>
                    
                </div>
                </div>
            </div>
    );
}

export default Product;