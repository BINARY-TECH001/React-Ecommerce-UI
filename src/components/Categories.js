import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from './data'

const Categories = () => {
  return (
    <div className='categoriesCon'>
      {categories.map(items =>(
        <CategoryItem items={items} key={items.id}/>
    ))}
    </div>
  )
}

export default Categories
