import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import ProductCard from '../components/productCard'

const products = [
  {
    id: 'a',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    productItems: [
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
    ],
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    variants: [
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-gray-900' },
      {
        name: 'White',
        bgColor: 'bg-slate-300',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'b',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://imgprd19.hobbylobby.com/e/5e/cd/e5ecd22cfe6a229cc51d6b30ef381ad1c6c064b1/700Wx700H-633792-0320.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    productItems: [
      'https://imgprd19.hobbylobby.com/e/5e/cd/e5ecd22cfe6a229cc51d6b30ef381ad1c6c064b1/700Wx700H-633792-0320.jpg',
      'https://imgprd19.hobbylobby.com/2/4f/57/24f57e245a879cb2543edd1df4e090bfebf24a45/350Wx350H-1013689-0320.jpg',
    ],
    price: '$35',
    color: 'Blue',
    variants: [
      { name: 'Blue', bgColor: 'bg-blue-600', selectedColor: 'ring-gray-900' },
      {
        name: 'Green',
        bgColor: 'bg-green-600',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'c',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://doubleredshop.com/6509/t-shirt-kung-fu-master-yellow.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    productItems: [
      'https://doubleredshop.com/6509/t-shirt-kung-fu-master-yellow.jpg',
      'https://target.scene7.com/is/image/Target/GUEST_3a98a9c4-1665-4882-8cdf-3f234305d676',
    ],
    price: '$35',
    color: 'Red',
    variants: [
      { name: 'Red', bgColor: 'bg-yellow-400', selectedColor: 'ring-gray-900' },
      {
        name: 'Red',
        bgColor: 'bg-red-600',
        selectedColor: 'ring-gray-400',
      },
    ],
  },
  {
    id: 'd',
    item: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://i5.walmartimages.com/asr/bd2f8fcd-43bf-4a71-ad92-1a020063dae1.d81b25437797c977bf16ac6e9c325f39.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    imageAlt: "Front of men's Basic Tee in black.",
    productItems: [
      'https://i5.walmartimages.com/asr/bd2f8fcd-43bf-4a71-ad92-1a020063dae1.d81b25437797c977bf16ac6e9c325f39.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      'https://m.media-amazon.com/images/I/B1S8yVtUEZS._CLa%7C2140%2C2000%7C61dv2LA5eyL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png',
    ],
    price: '$35',
    color: 'Orange',
    variants: [
      { name: 'Orange', bgColor: 'bg-orange-500', selectedColor: 'ring-gray-900' },
      {
        name: 'Purple',
        bgColor: 'bg-purple-600',
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
    productItems: [
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
    ],
    price: '$35',
    color: 'Black',
    variants: [
      { name: 'Black', bgColor: 'bg-black', selectedColor: 'ring-gray-900' },
      {
        name: 'White',
        bgColor: 'bg-slate-300',
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
              return <ProductCard key={product.id} {...product} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
