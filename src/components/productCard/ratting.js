import React from 'react';


const StarLoop = (loop) => {
    let rattingProduct = [];

    for (let index = 0; index < loop; index++) {
        rattingProduct.push(<i className='fa fa-star' key={index} ></i>);
    }

    return rattingProduct;
}

const Ratting = ({
    numberRatting
}) => (
        <span style={{ color: '#ffc107' }}>
            {StarLoop(numberRatting)}
        </span>
    );

export default Ratting;
