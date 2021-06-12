import React from 'react'
import Product from './Product';

const Products = (props) => {

    return (
        <div>
            <div className="row">
                <div className="col-md-3 display-2"> Products  </div>
                <div className="col-md-5 offset-md-2 display-6"> Products Added : {props.count}</div>
                
            </div>
            
            <div className="row">
                {
                    props.mock_data.map(prdocut => <Product key={prdocut.id} id={prdocut.id } onAdd={props.onAdd}  name={prdocut.name} price={prdocut.price} quantity={prdocut.qty} ></Product>)
                    
                    // props.mock_data.map(prdocut => <Product key={prdocut.id} product_item={prdocut} ></Product>   )
                }
            </div>
        </div>
    )
}
export default Products;