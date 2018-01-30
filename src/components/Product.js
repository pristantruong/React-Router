import React, { Component } from 'react';

class Product extends Component {
    render() {

        var {match} = this.props;
        console.log(match);
        var name = match.params.slug; //slug lấy từ products
        return (
            <div>
                Detail: {name}
            </div>
        );
    }
}

export default Product;
