import React from 'react'
import Layout from '../components/layout'

const products = [
  {
    id: 'a',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    variants: [
      { name: 'Black', bgColor: 'bg-pink-900', selectedColor: 'ring-gray-900' },
      {
        name: 'Heather Grey',
        bgColor: 'bg-blue-400',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'b',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    variants: [
      { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
      {
        name: 'Heather Grey',
        bgColor: 'bg-yellow-400',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'c',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    variants: [
      {
        name: 'Black',
        bgColor: 'bg-green-900',
        selectedColor: 'ring-gray-900',
      },
      {
        name: 'Heather Grey',
        bgColor: 'bg-red-400',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'd',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    variants: [
      { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
      {
        name: 'Heather Grey',
        bgColor: 'bg-gray-400',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'e',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    variants: [
      {
        name: 'Black',
        bgColor: 'bg-purple-900',
        selectedColor: 'ring-gray-900',
      },
      {
        name: 'Heather Grey',
        bgColor: 'bg-orange-400',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
]

export default function Shop() {
  return (
    <Layout>
      <div>
        <div className='mx-auto pb-16 px-4 sm:px-6 md:full md:px-0 lg:11/12 lg:px-16'>
          <div className='lg:flex'>
            <div className='py-2 w-2/3 mx-auto lg:flex mb-8'>
              <h2 className='text-4xl text-center font-medium tracking-tight text-gray-900 lg:w-2/3 lg:text-3xl lg:pb-2 lg:text-left '>
                Find your perfect product
              </h2>
              <h2 className='hidden text-4xl text-center font-bold tracking-tight text-gray-400 lg:flex lg:pb-2 lg:pr-8 lg:justify-end lg:w-1/3 lg:text-2xl lg:font-semibold'>
                <span>Filter</span>
              </h2>
            </div>

            {/* BUTTON CONTAINER */}
            <div className='mb-16 flex w-2/3 gap-1 mx-auto flex-wrap md:flex-nowrap'>
              <div className='flex justify-between gap-x-2 w-full md:w-1/2 lg:h-12 lg:my-auto'>
                <button className='flex-1 py-2 px-5 border border-black text-base font-medium rounded-full text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  button
                </button>
                <button className='flex-1 py-2 px-5 border border-black text-base font-medium rounded-full text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  button
                </button>
              </div>
              <div className='flex justify-between gap-x-2 w-full md:w-1/2 lg:h-12 lg:my-auto'>
                <button className='flex-1 py-2 px-5 border border-black text-base font-medium rounded-full text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  button
                </button>
                <button className='flex-1 py-2 px-5 border border-black text-base font-medium rounded-full text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  button
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className='mt-6 grid grid-cols-2 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20'>
            {products.map((product) => {
              const {
                id,
                imageSrc,
                href,
                item,
                imageAlt,
                color,
                price,
                variants,
              } = product
              return (
                <div key={id} className='group relative'>
                  <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:aspect-none'>
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className='object-center object-cover lg:w-full lg:h-96'
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <div className='lg:flex flex-row-reverse'>
                      {/*  VARIANT OPTIONS */}
                      <div className='flex justify-center w-full gap-x-1 mx-auto lg:justify-end lg:flex-1 lg:mb-2'>
                        {variants.map((variant, i) => {
                          const { bgColor } = variant
                          return (
                            <div
                              key={`${id}${i}`}
                              className={`p-4 shadow-sm ${bgColor} w-8 h-8 rounded-full`}
                            ></div>
                          )
                        })}
                      </div>
                      <h3 className='font-semibold text-lg pt-2 text-gray-700 lg:text-xl'>
                        <a href={href}>
                          <span
                            aria-hidden='true'
                            className='relative inset-0'
                          />
                          {item}
                        </a>
                      </h3>
                    </div>
                  </div>
                  <p className='text-sm text-center lg:text-left lg:text-lg'>{`USD ${price}`}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
