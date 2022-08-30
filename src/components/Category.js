import React from 'react'

import CategoryItem from './CategoryItem'


function Categories() {
  const categories =[
    {
      title:"Clothes",
      subs:['sub1','sub2','sub3','sub4']
    },
    {
      title:"Accessories",
      subs:['sub1','sub2','sub3','sub4']
    },
    {
      title:"Category2",
      subs:['sub1','sub2','sub3','sub4']
    },
  ]

  
  return (
    <div>
      {categories.map((category)=>{
        return(
          <div>
          <div className="py-2 px-4 bg-success text-white mb-3">
          <strong className="small text-uppercase font-weight-bold">
              {category.title}
          </strong>
          </div>
        <ul
        className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
          {category.subs.map((sub)=>{
            return(
              <CategoryItem  name ={sub} path="/"/>
            );
          })}
        
        </ul>
        </div>
        );

      })
      }
            
    </div>
  )
}

export default Categories