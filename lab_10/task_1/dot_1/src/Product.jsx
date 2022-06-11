import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function Product (props)
{
    return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card" style={{margin:"20px"}}>
                <div className="card-body text-center">
                <img src='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' height={"100px"} alt='Image'>

                </img>
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