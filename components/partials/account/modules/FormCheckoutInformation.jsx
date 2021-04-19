import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Select } from 'antd';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLoginSubmit = (e) => {
        Router.push({pathname: '/account/shipping', query: e});
    };


    render() {
        return (
            <Form
                className="ps-form__billing-info"
                onFinish={this.handleLoginSubmit}>
                <h3 className="ps-form__heading">Shipping address</h3>
                <div className="form-group">
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Enter an address!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="apartment"
                        rules={[
                            {
                                required: true,
                                message: 'Enter an Apartment!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                        />
                    </Form.Item>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter a city!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="city"
                                    placeholder="City"
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                name="postalCode"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter a postal oce!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="postalCode"
                                    placeholder="Postal Code"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="save-information"
                        />
                        <label htmlFor="save-information">
                            Save this information for next time
                        </label>
                    </div>
                </div>
                <div className="ps-form__submit">
                    <Link href="/account/cart">
                        <a>
                            <i className="icon-arrow-left mr-2"></i>
                            Return to shopping cart
                        </a>
                    </Link>
                    <div className="ps-block__footer">
                        <button className="ps-btn">Continue to shipping</button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default FormCheckoutInformation;
