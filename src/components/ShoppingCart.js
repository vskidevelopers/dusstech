import React from 'react'
import { Link } from 'react-router-dom'

function ShoppingCart() {
    return (
        <section className='py-5'>
            <h2 class="h5 text-uppercase mb-4">Shopping cart</h2>
            <div class="row">
                <div class="col-lg-8 mb-4 mb-lg-0">
                        <div class="table-responsive mb-4">
                            <table class="table">
                                <thead class="bg-light">
                                    <tr>
                                    <th class="border-0" scope="col">
                                        <strong class="text-small text-uppercase"
                                        >Product</strong
                                        >
                                    </th>
                                    <th class="border-0" scope="col">
                                        <strong class="text-small text-uppercase">Price</strong>
                                    </th>
                                    <th class="border-0" scope="col">
                                        <strong class="text-small text-uppercase"
                                        >Quantity</strong
                                        >
                                    </th>
                                    <th class="border-0" scope="col">
                                        <strong class="text-small text-uppercase">Total</strong>
                                    </th>
                                    <th class="border-0" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th class="pl-0 border-0" scope="row">
                                        <div class="media align-items-center">
                                        <a
                                            class="reset-anchor d-block animsition-link"
                                            href="detail.html"
                                            ><img
                                            src="img/product-detail-3.jpg"
                                            alt="..."
                                            width="70"
                                        /></a>
                                        <div class="media-body ml-3">
                                            <strong class="h6"
                                            ><a
                                                class="reset-anchor animsition-link"
                                                href="detail.html"
                                                >Red digital smartwatch</a
                                            ></strong
                                            >
                                        </div>
                                        </div>
                                    </th>
                                    <td class="align-middle border-0">
                                        <p class="mb-0 small">$250</p>
                                    </td>
                                    <td class="align-middle border-0">
                                        <div
                                        class="border d-flex align-items-center justify-content-between px-3"
                                        >
                                        <span
                                            class="small text-uppercase text-gray headings-font-family"
                                            >Quantity</span
                                        >
                                        <div class="quantity">
                                            <button class="dec-btn p-0">
                                            <i class="fas fa-caret-left"></i>
                                            </button>
                                            <input
                                            class="form-control form-control-sm border-0 shadow-0 p-0"
                                            type="text"
                                            value="1"
                                            />
                                            <button class="inc-btn p-0">
                                            <i class="fas fa-caret-right"></i>
                                            </button>
                                        </div>
                                        </div>
                                    </td>
                                    <td class="align-middle border-0">
                                        <p class="mb-0 small">$250</p>
                                    </td>
                                    <td class="align-middle border-0">
                                        <Link class="reset-anchor" to="/"
                                        ><i class="fas fa-trash-alt small text-muted"></i
                                        ></Link>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default ShoppingCart