import React from 'react'
import { Link } from 'react-router-dom'

import './Shop.css'

function Hero({breadcrumb, breadcrumbActive}) {
  return (
    <section className="py-5 bg-light">
    <div className="container">
      <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
        <div className="col-lg-6">
          <h1 className="text-uppercase mb-0">Shop</h1>
        </div>
        <div className="col-lg-6 text-lg-right">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
              <li className="breadcrumb-item">
                <Link to="/">{breadcrumb}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {breadcrumbActive}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero