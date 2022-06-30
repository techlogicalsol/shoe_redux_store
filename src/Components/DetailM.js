import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {FaMinusSquare, FaPlusSquare} from 'react-icons/fa';
import currencyFormatter from 'currency-formatter';


function DetailM(){

    const {id} = useParams();

    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch({type: "PRODUCT", id:id})
    },[id])

    const {product} = useSelector(state => state.ProductsReducerM)

    const [quantity, setQuantity] = useState(1);

    const decQuantity =()=>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 bg-light">
                        <div className="row">
                            <div className="col-md-4 p-3">
                                <img src={`/img1/${product.image}`} alt="product"
                                className="myImg" />
                          
                            </div>

                            <div className="col-md-8 p-3 myDetailM">
                                <h3>{product.name}</h3>

                            <div className="d-flex mt-3">
                                <p className="detail_price">
                                    {currencyFormatter.format(product.price,{code: "USD"})}
                                    </p>
                                <p className="detail_discountPrice">
                                    {currencyFormatter.format(product.discountPrice, {code: "USD"})}
                                    </p>
                                
                            </div>
                            <h5 className="mt-5">QUANTITY</h5>
                            <div className="d-flex">
                                
                                <span className="dec">
                                    <FaMinusSquare 
                                    onClick={decQuantity}/>
                                </span>

                                <span className="quantity">
                                    {quantity}
                                </span>

                                <span className="inc">
                                    <FaPlusSquare 
                                    onClick={() => setQuantity(quantity + 1)}/>
                                </span>

                                <button className="btn btn-warning btn-block"
                                onClick={() => dispatch({type: 'ADD_TO_CART',
                                payload:{product, quantity}})}>
                                    ADD TO CART
                                </button>
                            </div>

                     
                             
                            </div>
                            <div className="col-md-4">
                            <h4 className="mt-2">
                                        <strong>Description</strong>
                                    </h4>
                                    <p>
                                        {product.description}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}


export default DetailM