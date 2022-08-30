import React from 'react'
import Categories from './Category'

import './Shop.css'

function Sidebar() {

  return (
    <div>
    <h5 className="text-uppercase mb-4">Categories</h5>
    <Categories />
    </div>
  )
}

export default Sidebar