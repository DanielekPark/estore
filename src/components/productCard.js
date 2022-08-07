import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

export default function ProductCard(props) {
  const imageRef = useRef(null)
  const {color, href, id, imageAlt, imageSrc, price, item, variants, productItems} = props

  //WHEN USER CLICKS ON A VARIANT CIRCLE IT CHANGES THE COLOR
  const displayVariant = (index) => imageRef.current.src = productItems[index];
  
  return (
    <div className='group relative'>
      <div className='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:aspect-none'>
        {/* ADD A LINK, USER GOES TO PRODUCT WHEN CLICKED */}
        <Link to="/product">
        <img
          src={imageSrc}
          alt={imageAlt}
          className='h-96 mx-auto object-center object-cover'
          ref={imageRef}
        />
        </Link>
      </div>
      <div className='mt-4 text-center'>
        <div className='lg:flex flex-row-reverse'>
          {/* VARIANT OPTIONS */}
          <div className='flex justify-center w-full gap-x-1 mx-auto lg:justify-end lg:flex-1 lg:mb-2'>
            {variants.map((variant, index) => {
              const { bgColor } = variant
              return (
                <div
                  key={`${id}${index}`}
                  className={`p-4 hover:cursor-pointer shadow-sm ${bgColor} w-8 h-8 rounded-full`}
                  onClick={() => displayVariant(index)}
                ></div>
              )
            })}
          </div>
          <h3 className='font-semibold text-lg pt-2 text-gray-700 lg:text-xl'>
            <p>
              <span aria-hidden='true' className='relative inset-0' />
              {item}
            </p>
          </h3>
        </div>
      </div>
      <p className='text-sm text-center lg:text-left lg:text-lg'>{`USD ${price}`}</p>
    </div>
  )
}