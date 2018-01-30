import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1, 
                name: 'NodeJS',
                price: 500
            },
            {
                id: 2,
                name: 'ReactJS',
                price: 450
            },
            {
                id: 3,
                name: 'Angular',
                price: 450
            },
        ];

        var {match} = this.props;
        console.log(match);

        var result = products.map((product, index) => {
            return (
                <NavLink to="" key={index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })

        return (
            <div className="container">
                Product
                
                <div className="row">
                    
                    <ul className="list-group">
                        {result}
                    </ul>
                    
                    
                </div>
                
            </div>
        );
    }
}

export default Products;
