import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Reviews() {
  const person1 = [
    'person1key',
    'person1key',
    'person1key',
    'person1key',
    'person1key',
  ]
  const person2 = [
    'person2key',
    'person2key',
    'person2key',
    'person2key',
    'person2key',
  ]
  const person3 = [
    'person3key',
    'person3key',
    'person3key',
    'person3key',
    'person3key',
  ]

  return (
    <div className=''>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
      >
        {/* PERSON 1 */}
        <div className='text-left lg:flex lg:flex-row-reverse lg:gap-x-2 lg:mb-0'>
          <div className='lg:flex-1 lg:flex lg:flex-col lg: lg:pl-16 '>
            <p className='text-left lg:mb-4 lg:text-lg'>Rated 5 stars by our customers</p>
            {/* STAR RATINGS  */}
            <div className='inline-flex my-8 md:mb-4 lg:mb-16'>
              {person1.map((star, index) => {
                return (
                  <svg
                    key={`${star}${index}`}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 block md:h-14 md:w-14'
                    viewBox='0 0 20 20'
                    fill='#e6e600'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                )
              })}
            </div>
            <div className='pb-6 w-4/5 md:w-3/4'>
              <p className='pb-2 text-2xl'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae."
              </p>
              <p className='text-xl font-semibold lg:mt-8'>-person 1</p>
            </div>
          </div>
          <div className='mb-10 lg:flex-1 lg:mb-0'>
            <img
              src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
              className='md:object-contain'
              alt=''
            />
          </div>
        </div>
        {/* PERSON 1 */}
        <div className='text-left lg:flex lg:flex-row-reverse lg:gap-x-2 lg:mb-0'>
          <div className='lg:flex-1 lg:flex lg:flex-col lg: lg:pl-16 '>
            <p className='text-left lg:mb-4 lg:text-lg'>Rated 5 stars by our customers</p>
            {/* STAR RATINGS  */}
            <div className='inline-flex my-8 md:mb-4 lg:mb-16'>
              {person1.map((star, index) => {
                return (
                  <svg
                    key={`${star}${index}`}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 block md:h-14 md:w-14'
                    viewBox='0 0 20 20'
                    fill='#e6e600'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                )
              })}
            </div>
            <div className='pb-6 w-4/5 md:w-3/4'>
              <p className='pb-2 text-2xl'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae."
              </p>
              <p className='text-xl font-semibold lg:mt-8'>-person 1</p>
            </div>
          </div>
          <div className='mb-10 lg:flex-1 lg:mb-12'>
            <img
              src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
              className='md:object-contain'
              alt=''
            />
          </div>
        </div>
        {/* PERSON 1 */}
        <div className='text-left lg:flex lg:flex-row-reverse lg:gap-x-2 lg:mb-0'>
          <div className='lg:flex-1 lg:flex lg:flex-col lg: lg:pl-16 '>
            <p className='text-left lg:mb-4 lg:text-lg'>Rated 5 stars by our customers</p>
            {/* STAR RATINGS  */}
            <div className='inline-flex my-8 md:mb-4 lg:mb-16'>
              {person1.map((star, index) => {
                return (
                  <svg
                    key={`${star}${index}`}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 block md:h-14 md:w-14'
                    viewBox='0 0 20 20'
                    fill='#e6e600'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                )
              })}
            </div>
            <div className='pb-6 w-4/5 md:w-3/4'>
              <p className='pb-2 text-2xl'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae."
              </p>
              <p className='text-xl font-semibold lg:mt-8'>-person 1</p>
            </div>
          </div>
          <div className='mb-10 lg:flex-1 lg:mb-12'>
            <img
              src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
              className='md:object-contain'
              alt=''
            />
          </div>
        </div>

      </Carousel>
    </div>
  )
}
