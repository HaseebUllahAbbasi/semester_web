import React from 'react'
import Product from './Product';

const Products = (props) => {

    return (
        <div>
            <h1 className="display-2">Products</h1>
            <div className="row">
                {
                    props.mock_data.map(prdocut => <Product key={prdocut.id} id={prdocut.id } onAdd={props.onAdd}  name={prdocut.name} price={prdocut.price} ></Product>)
                }
            </div>
        </div>
    )
}
export default Products;