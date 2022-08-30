import React from 'react'
import {Link} from 'react-router-dom'

import "./Shop.css"

function CategoryItem(props) {
return (
    <div>
        <li className="mb-2">
            <Link className="reset-anchor" to ={props.path} style={{textDecoration:"none"}}>{props.name}</Link>
        </li>
    </div>
)
}

export default CategoryItem