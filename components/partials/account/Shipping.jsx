import React from 'react';
import Link from 'next/link';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import { useSelector } from 'react-redux'
import { withRouter } from 'next/router'
import axios from 'axios'
import {localBaseUrl} from '~/repositories/Repository'

const Shipping = (props) => {

    const userAddress = props.router.query
    const { user } = useSelector(state=> state.auth)
    const { cartItems, amount } = useSelector(state=> state.cart)

    const submitData = () => {

        console.log(cartItems);
        const data = {
            customer_id : user.id,
            items: cartItems,
            total_amount: (amount + 20),
            shipping_fee: 20,
            userAddress: userAddress
        }

        axios.post(`${localBaseUrl}/api/order`, data)
            .then(res=> {
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })


    }


    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Shipping Information</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <div className="ps-block__panel">
                                    <figure>
                                        <small>Contact</small>
                                        <p>{user.email}</p>
                                        <Link href="/account/checkout">
                                            <a>Change</a>
                                        </Link>
                                    </figure>
                                    <figure>
                                        <small>Ship to</small>
                                        <p>{`${userAddress.apartment}, ${userAddress.address}, ${userAddress.city}, ${userAddress.postalCode}`}</p>
                                        <p>{}</p>
                                        <Link href="/account/checkout">
                                            <a>Change</a>
                                        </Link>
                                    </figure>
                                </div>

                                <h4>Payment Methods</h4>
                                <div className="ps-block--payment-method">
                                    <div className="ps-block__content">
                                        <h5>Cash On Delivery</h5>
                                    </div>
                                </div>
                                
                                <div className="ps-block__footer">
                                    <Link href="/account/checkout">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Return to information
                                        </a>
                                    </Link>
                                    {/* <Link href={{pathname: "/account/payment", query: { user: user, userAddr: userAddress }}}>
                                        <a className="ps-btn">
                                            Continue to payment
                                        </a>
                                    </Link> */}
                                    <Link href="#">
                                        <a className="ps-btn" onClick={submitData}>
                                            Continue to payment
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary shipping={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Shipping);
