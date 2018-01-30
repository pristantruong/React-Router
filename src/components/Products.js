import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1, 
                slug: 'node',
                name: 'NodeJS',
                price: 500
            },
            {
                id: 2,
                slug: 'react',
                name: 'ReactJS',
                price: 450
            },
            {
                id: 3,
                slug: 'ang',
                name: 'Angular',
                price: 450
            },
        ];

        var {match} = this.props;
        var url = match.url;
        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
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
                
                <div className="row">
                    <Route path = "/products/:slug" component={Product}/>
                </div>
                
            </div>
        );
    }
}

export default Products;
