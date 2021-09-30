import React,{useEffect,useState} from 'react';
// import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
function ProceedToCheckout({img, title, price, desc, id}) {
    
    return (
        <div>
            <div className="py-3 bg-warning"> 
                <div className="container"> 
                    <h6>Home / Checkout</h6>
                </div>
            </div>    

I           <div className="py-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic Information</h4>
                                </div>
                            <div className="card-body">
                            
                                <div className="row">
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> First Name</label>
                                            <input type="text" name="firstname" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Last Name</label>
                                            <input type="text" name="Lastname" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Phone Number</label>
                                            <input type="text" name="phone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Email Address</label>
                                            <input type="text" name="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Full Address</label>
                                            <textarea rows="3" className="form-control" ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> City</label>
                                            <input type="text" name="City" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> State</label>
                                            <input type="text" name="State" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Zip Code</label>
                                            <input type="text" name="zipcode" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">                           
                                        <div classame="form-group text-end"> 
                                            <button type="button" className="btn btn-primary">Place Order</button>
                                        </div>
                                    </div>
                                </div>

                            </div>   
                        </div>

                        <div className="col-md-5">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th width="50%">Product</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>

                                        <tr>
                                        <td>product</td>
                                        <td>Price</td>
                                        <td>2</td>
                                        <td>400</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>    
        </div> 
        </div>           
    )


}

export default ProceedToCheckout;