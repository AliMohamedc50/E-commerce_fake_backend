/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
        <div className='relative'>
            {
                item.isnew ? <span className='absolute top-1 left-1 z-30 bg-gray-600 text-white px-1 rounded'>New Season</span> : null
            }
            
            <div className="image relative w-52 h-72">
                <img className='mainimg absolute w-full h-full bject-cover' src={item.img} alt="" />
                <img className='secondimg absolute w-full h-full bject-cover' src={item.img2} alt="" />
            </div>
            <h1 className='text-2xl'>{item.title}</h1>
            <div className="price flex gap-2">
                <var> <del className='text-gray-500'>{item.oldprice}</del> </var>
                <p className='text-lg'>{item.price}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card
