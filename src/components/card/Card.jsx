/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const upload_url = "http://localhost:1337"
  return (
    <Link to={`/product/${item.id}`}>
        <div className='relative'>
            {
                item?.attributes.isnew ? <span className='absolute top-1 left-1 z-30 bg-gray-600 text-white px-1 rounded'>New Season</span> : null
            }
            
            <div className="image relative w-52 h-72">
                <img className='mainimg absolute w-full h-full bject-cover' src={upload_url  + item?.attributes.img.data.attributes.url} alt="" />
                <img className='secondimg absolute w-full h-full bject-cover' src={upload_url  + item?.attributes.img2.data.attributes.url} alt="" />
            </div>
            <h1 className='text-2xl'>{item.attributes.title}</h1>
            <div className="price flex gap-2">
                {/* <var> <del className='text-gray-500'>{item.oldprice}</del> </var> */}
                <p className='text-lg'>{item?.attributesprice}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card
