  import React,{useState, useEffect} from 'react'
  import {Link} from 'react-router-dom'
import Item from './Item'
import Pagination from './Pagination'

  import './Product.css'

  function Products() {

    const [items, setItems] = useState([])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage=9


    const productItems = []



    useEffect(( ) => {
      for (let i = 0; i < 100; i++) {
        productItems.push(i)
      }
      console.log(productItems)
      setItems(productItems)
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    
    }, [itemOffset, itemsPerPage, items])

    const lastCount= itemOffset +itemsPerPage 
    
  

    return (
      <div>
        <div className="row mb-3 align-items-center">
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <p className="text-small text-muted mb-0">
                    Showing {itemOffset +1}–{lastCount>items.length ? items.length : lastCount} of {items.length} results
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul
                    className="list-inline d-flex align-items-center justify-content-lg-end mb-0"
                  >
                    <li className="list-inline-item text-muted mr-3">
                      <Link className="reset-anchor p-0" to="/">
                        <i className="fas fa-th-large"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item text-muted mr-3">
                      <Link className="reset-anchor p-0" to="/">
                        <i className="fas fa-th"></i>
                      </Link>
                    </li>
                    {/* Add a drop down select with options dfor sorting */}
                  </ul>
                </div>
              </div>
          <div className='row'>
            <Item currentItems={currentItems} />
        </div>
        <Pagination items={items} pageCount={pageCount} setItemOffset={setItemOffset} itemsPerPage={itemsPerPage}  />
      </div>
    )
  }

  export default Products