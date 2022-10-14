import React from 'react'
import {Link} from 'react-router-dom'
import thumbnail from '../images/product-3.jpg'

function CartTable() {
  return (
                                <div className="table-responsive mb-4">
                            <table className="table">
                                <thead className="bg-light">
                                    <tr>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase"
                                        >Product</strong>
                                    </th>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase">Price</strong>
                                    </th>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase"
                                        >Quantity</strong>
                                    </th>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase">Total</strong>
                                    </th>
                                    <th className="border-0" scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th className="pl-0 border-0" scope="row">
                                        <div className="media align-items-center row">
                                        <Link
                                            className="reset-anchor d-block animsition-link col-4"
                                            to="/"
                                            ><img
                                            src={thumbnail}
                                            alt="..."
                                            width="50"
                                        /></Link>
                                        <div className="media-body ml-3 col-8">
                                            <strong className="h6"
                                            ><a
                                                class="reset-anchor animsition-link"
                                                href="detail.html"
                                                >Red digital smartwatch</a
                                            ></strong>
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
                                        <p className="mb-0 small">$250</p>
                                    </td>
                                    <td className="align-middle border-0">
                                        <Link className="reset-anchor" to="/"
                                        ><i className="fas fa-trash-alt small text-muted"></i
                                        ></Link>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

  )
}

export default CartTable