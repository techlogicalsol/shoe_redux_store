import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FaMinusSquare, FaPlusSquare} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai'
import currencyFormatter from 'currency-formatter';



function Cart(){

    const {products, totalQuantities, totalPrice} = useSelector(state => state.CartReducer);

    const dispatch = useDispatch();

    return(
        

            <div className="container mt-5">
                <h1>Your cart</h1>

             {products.length > 0? 
             <>
             
             <div className="row">
                 <div className="col-md-12">
                     <div className="row">
                         <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12 p-3 cart_head bg-light">
                                    <div className="p-2 myWidth">Item</div>
                                    <div className="p-2 myWidth">Name</div>
                                    <div className="p-2 myWidth">Price</div>
                                    <div className="p-2 myWidth">+ / -</div>
                                    <div className="p-2 myWidth">Remove</div>
                                    <div className="p-2 myWidth">Total Price</div>
                                </div>

                               
                                    {products.map(product =>(
                                    <div className="col-md-12 cart_head" key={product.id}>
                                    <div className="p-2 myWidth1">
                                        <img src={`/img1/${product.image}`} 
                                        alt="product" className="myCartProduct"/>
                                    </div>
                                    <div className="p-2 myWidth1">
                                        {product.name}
                                    </div>
                                    <div className="p-2 myWidth1">
                                {currencyFormatter.format(product.discountPrice,{code: "USD"})}
                                    </div>
                                    <div className="p-2 myWidth1">
                                        <span className="dec">
                                        <FaMinusSquare
                                        onClick={()=> dispatch({type: 'DEC',
                                        payload: product.id})}/>
                                        </span>  

                                        <span className="quantity">
                                            {product.quantity}
                                        </span>

                                        <span className="inc">
                                            <FaPlusSquare 
                                            onClick={() => dispatch({type: 'INC',
                                            payload: product.id}) }/>
                                        </span>
                                    </div>
                                    <div className="p-2 myWidth1">
                                        <span className="delete">
                                            <AiFillDelete 
                                            onClick={() => dispatch({type: 'REMOVE',
                                            payload: product.id})}/>
                                        </span>
                                    </div>
                                    <div className="p-2 myWidth1">
    {currencyFormatter.format(product.discountPrice * product.quantity,{code: "USD"})}
                                    </div>
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                         

                         <div className="col-md-4 pl-4 pr-4">
                             <div className="row">
                                 <div className="col-md-12 p-3 bg-light">
                                     <div className="myWidthSum p-2">

                                      <h1><strong>Summary</strong></h1>  
                                    </div>

                                    <div className="total_item">
                                        <p>Total Item</p>
                                        <p id="tQty">{totalQuantities}</p>
                                    </div>
                                    <div className="total_price">
                                        <p>Total Price</p>
                                        <p id="tPrice">
                                            {currencyFormatter.format(totalPrice,{code: "USD"})}
                                        </p>
                                    </div>
                                    <button className="btn btn-primary btn-block">
                                        CHECKOUT
                                    </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             
             
             </>: 'Your cart is currently empty'}
            </div>



        
    )
}

export default Cart