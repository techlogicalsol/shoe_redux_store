import React from 'react'
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';

function Men(){

    const {products} = useSelector(state => state.ProductsReducerM)
   

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-12 p-3 bg-light">
                    <h1>
                        <strong>
                         Men's Running Shoes
                        </strong>
                    </h1>
                    <div className="row">

                    {products.map(product =>(
                    <div className="col-md-4 mb-4" key={product.id}>
                       
                        <img src={`/img1/${product.image}`} alt="product"
                        className="myImg" />

                    <div className="card-body">
                        <h6 className="mb-4 mt-2">{product.name}</h6>

                        <div className="d-flex mt-3">
                            <p className="price">
                                {currencyFormatter.format(product.price, {code: "USD"})}
                            </p>
                            <p className="discount">{product.discount}% discount</p>

                            <p className="discountPrice">
                                {currencyFormatter.format(product.discountPrice,{code: "USD"})}
                            </p>
                        </div>
                    
                    
                    
                    <NavLink to={`/detailM/${product.id}`} className="myLink">
                    <button className="btn btn-warning btn-block">
                        SHOP NOW
                        </button>
                    </NavLink>
                   
                   
                    </div>
                    
                    </div>
                   
                    ))}
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Men