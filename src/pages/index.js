import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/layout'
import '../styles/styles.css'
import trial from '../images/trial.svg'
import truck from '../images/truck.svg'
import warranty from '../images/warranty.svg'
import moncler from '../images/moncler.svg'
import plane from '../images/plane.png'
import Reviews from '../components/reviews'
import '../styles/styles.css'

/*
slide animation for the svgs line 90
*/
const IndexPage = () => {
  const [showIcons, setShowIcons] = useState(false)
  const iconsSection = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolledDist = window.pageYOffset
      const distanceTop = iconsSection.current?.getBoundingClientRect().top

      if (scrolledDist > distanceTop) {
        setShowIcons(true)
      }
    })
  }, [])

  return (
    <Layout>
      <title>Home Page</title>
      <section className='bg-yellow-50 pb-4 md:pb-0'>
        <div className='md:flex md:flex-row-reverse md:justify-between'>
          <div className='w-full md:w-1/2'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
              className='block top-img object-cover'
              alt='shirts'
            />
          </div>

          <div className='md:flex md:w-1/2 md:flex-col md:justify-evenly'>
            <h2 className='w-1/2 font-mono mx-auto text-center text-2xl mt-4 pb-2 font-bold md:mt-0'>
              Express yourself with emojis
            </h2>
            <p className='text-lg text-center font-light w-3/4 mx-auto mt-2 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              minus! Lorem
            </p>
            <button className='block mx-auto w-4/6 md:w-5/6 py-3 border-2 border-black text-base font-medium rounded-full bg-transparent'>
              Add that special touch!
            </button>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className='px-4 mb-12 md:px-0 md:pb-8 lg:px-8'>
        <h2 className='font-sans text-center text-4xl py-14 md:py-16'>
          Explore our bestsellers
        </h2>
        <div className='md:mx-auto md:flex lg:gap-x-20 lg:justify-around'>
          <div className='md:flex-1'>
            <div className='overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                className='block bestsellers object-cover w-full'
                alt='shirts'
              />
            </div>
            <h2 className='inline-block text-2xl my-6 font-bold'>Shirt</h2>
            <p className='text-base font-light mt-0 pb-8 md:px-2 lg:px-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              minus!
            </p>
          </div>
          <div className='hidden md:block md:flex-1'>
            <div className='overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                className='block bestsellers object-cover w-full'
                alt='shirts'
              />
            </div>
            <h2 className='inline-block text-2xl my-6 font-bold'>Shirt</h2>
            <p className='text-base font-light mt-0 pb-8 md:px-2 lg:px-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              minus!
            </p>
          </div>
          <div className='hidden md:block md:flex-1'>
            <div className='overflow-hidden'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                className='block bestsellers object-cover w-full'
                alt='shirts'
              />
            </div>
            <h2 className='inline-block text-2xl my-6 font-bold'>Shirt</h2>
            <p className='text-base font-light mt-0 pb-8 md:px-2 lg:px-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              minus!
            </p>
          </div>
        </div>
      </section>

      {/* ICONS SECTION */}
      <section
        ref={iconsSection}
        className='overflow-hidden border-t relative border-b border-gray-500'
      >
        <div
          className={`py-24 grid grid-cols-2 ${
            showIcons ? 'opacity-1' : 'opacity-0'
          } md:grid-cols-4 gap-y-1.5 md:w-11/12 md:mx-auto lg:w-full lg:border-l-0 lg:border-r-0 lg:px-24`}
        >
          <div className='overflow-hidden'>
            <div
              className={`delay-400 duration-1000 ${
                showIcons ? 'translate-y-0' : '-translate-y-full'
              } `}
            >
              <p className='text-center md:block md:mb-8'>100 Day Trial</p>
              <img
                className='h-32 w-32 block mx-auto md:w-16 md:h-16'
                src={trial}
                alt='100 Day Trial'
              />
              <p className='text-center hidden md:hidden md:mb-8'>
                100 Day Trial
              </p>
            </div>
          </div>

          <div className='overflow-hidden'>
            <div
              className={`delay-500 duration-1000 ${
                showIcons ? 'translate-y-0' : '-translate-y-full'
              } `}
            >
              <p className='text-center md:block md:mb-8'>Free Shipping</p>
              <img
                className='h-32 w-32 block mx-auto md:w-16 md:h-16'
                src={truck}
                alt='100 Day Trial'
              />
              <p className='text-center hidden md:hidden md:mb-8'>
                Free Shipping
              </p>
            </div>
          </div>
          <div className='overflow-hidden'>
            <div
              className={`delay-700 duration-1000 ${
                showIcons ? 'translate-y-0' : '-translate-y-full'
              } `}
            >
              <p className='text-center md:block md:mb-8'>Lifetime Warranty</p>
              <img
                className='h-32 w-32 block mx-auto md:w-16 md:h-16'
                src={warranty}
                alt='100 Day Trial'
              />
              <p className='text-center hidden md:hidden md:mb-8'>
                Lifetime Warranty
              </p>
            </div>
          </div>
          <div className='overflow-hidden'>
            <div
              className={`delay-1000 duration-1000 ${
                showIcons ? 'translate-y-0' : '-translate-y-full'
              } `}
            >
              <p className='text-center md:block md:mb-8'>Approved To Fly</p>
              <img
                className='h-32 w-32 block mx-auto md:w-16 md:h-16'
                src={plane}
                alt='100 Day Trial'
              />
              <p className='text-center hidden md:hidden md:mb-8'>
                Approved To Fly
              </p>
            </div>
          </div>


        </div>
      </section>

      <section className='bg-yellow-50 pb-4 reviews'>
        <div className='relative max-w-7xl mx-auto pt-10 pb-4 px-8 sm:px-6 lg:px-8 lg:py-20'>
          <div className='relative'>
            <div className='relative lg:ml-10'>
              <blockquote className='relative'>
                <footer className=''>
                  <div className=''>
                    {/* REVIEWS */}
                    <Reviews />
                    <p className='pt-4 md:pt-0'>
                      <a href='#'>{'Shop The Carry On >'}</a>
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className='text-center pt-20 md:pt-10 lg:pt-10'>
        <p className='text-xl mx-auto w-4/5'>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          atque."
        </p>
        <div>
          <img
            className='h-36 w-36 block mx-auto mt-4 md:h-48 md:w-48'
            src={moncler}
            alt='moncler'
          />
        </div>
      </section>

      {/* RECOMMENDED BY COMPANIES */}
      <section className='text-center bg-green-800 pt-16 md:pb-6 md:pt-10 lg:pb-0'>
        <p className='text-white'>Recommended by</p>
        <div className='mx-auto'>
          {/* VOGUE */}
          <div className='flex'>
            <svg
              className='block h-36 w-36 ml-auto md:h-60 md:w-60 lg:h-64 lg:w-64'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 192.756 192.756'
            >
              <g fill='#fff' fillRule='evenodd' clipRule='evenodd'>
                <path fill='transparent' d='M0 0h192.756v192.756H0V0z' />
                <path d='M57.842 120.688c-5.474 0-10.71-3.066-14.1-7.254-3.863-4.76-5.745-10.912-5.745-16.996 0-5.846 1.729-11.727 5.304-16.387 3.525-4.575 8.829-7.846 14.727-7.846 5.423 0 10.625 3.102 13.964 7.236 3.847 4.762 5.762 10.93 5.762 17.015 0 5.828-1.746 11.709-5.305 16.369-3.49 4.54-8.761 7.863-14.607 7.863zM2.834 73.205h16.489v.473h-4.05l12.303 33.689 10.388-33.689H33.88v-.473h8.897v.473h-3.932l-14.641 46.568L7.173 73.678H2.834v-.473zM113.85 72.391v16.184h-.373c-.695-3.186-1.678-6.287-3.389-9.1-2.033-3.288-5.27-6.981-9.49-6.981-9.693 0-10.574 17.37-10.574 23.996 0 5.932.474 12.049 2.626 17.607 1.508 3.898 3.694 5.812 7.745 5.812 3.219 0 6.643-1.627 8.354-4.424.441-.729.475-1.541.475-2.371v-12.508h-4.236v-.49h15.506v.49h-3.627v18.709h-.32c-.916-1.525-2.357-2.525-4.203-2.525-1.34 0-2.645.475-3.812 1.119l-1.051.576c-2.373 1.051-4.645 1.812-7.271 1.812-12.031 0-18.437-12.828-18.437-23.469 0-7.779 2.966-16.1 9.27-20.963 2.83-2.187 6.253-3.796 9.896-3.796 1.424 0 2.83.44 4.152.966l.967.373c1.102.407 2.305.796 3.49.796 1.475 0 2.797-.966 3.932-1.813h.37zM118.477 73.205h16.539v.474h-4.389v35.91c0 5.625 5.795 9.049 10.861 9.049 5.457 0 10.049-3.795 10.049-9.371V73.678h-5.184v-.474h42.688v16.658h-.322c-.492-4.406-1.34-8.931-4.373-12.371-3.066-3.474-7.236-3.813-11.523-3.813h-4.625v21.421c.947.101 1.914.169 2.881.169 5.812 0 7.32-3.999 7.574-8.948h.424v18.793h-.424c-.729-4.49-2.711-9.303-7.982-9.303-.83 0-1.643.051-2.473.119v22.911h6.93c3.594 0 7.168-1.559 9.711-4.066 2.168-2.135 3.678-4.914 4.203-7.914.287-1.678.424-3.389.508-5.084h.373v17.539h-33.367v-.475h3.881V73.678h-8.203v35.724c0 7.387-7.016 10.658-13.59 10.658-7.439 0-15.643-3.609-15.643-12.117V73.678h-4.523v-.473h-.001z' />
                <path
                  d='M69.382 96.438c0-6.728-2.406-23.539-11.506-23.539-9.134 0-11.507 16.794-11.507 23.539 0 6.744 2.39 23.555 11.507 23.555 9.1-.001 11.506-16.827 11.506-23.555z'
                  fill='rgba(6, 95, 70, var(--tw-bg-opacity)'
                />
              </g>
            </svg>

            {/* FORBES */}
            <svg
              className='block h-36 w-36 mr-auto md:h-60 md:w-60 lg:h-64 lg:w-64'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='1.91 -25.333 192.757 74.754'
            >
              <path fill='transparent' d='M1.91-25.333h192.757v74.755H1.91z' />
              <path
                d='M114.738 1.027c-2.424 0-4.328.52-6.233 1.558 0-5.541 0-10.562.174-12.293L97.076-7.631v1.039l1.212.173c1.557.346 2.079 1.211 2.422 3.29.349 4.156.174 26.321 0 29.958 3.117.693 6.408 1.213 9.699 1.213 9.178 0 14.719-5.715 14.719-14.72 0-7.099-4.502-12.295-10.39-12.295zm-3.983 25.109c-.693 0-1.56 0-2.078-.172-.174-2.424-.346-12.642-.174-21.646 1.039-.347 1.731-.52 2.598-.52 3.812 0 5.89 4.502 5.89 10.042-.001 6.929-2.599 12.296-6.236 12.296zM53.436-9.016H22.958v1.558l1.732.173c2.25.346 3.117 1.731 3.462 5.021.521 6.234.347 17.491 0 22.857-.346 3.291-1.211 4.85-3.462 5.021l-1.732.348v1.385h19.568v-1.385l-2.078-.348c-2.251-.172-3.117-1.73-3.463-5.021-.174-2.252-.347-5.889-.347-10.39l4.156.173c2.598 0 3.809 2.078 4.329 5.021h1.559V3.106h-1.559c-.521 2.944-1.731 5.021-4.329 5.021l-4.155.174c0-5.888.173-11.429.347-14.719h6.06c4.677 0 7.101 2.943 8.832 8.139l1.732-.52-.174-10.217z'
                fill='#fff'
              />
              <path
                d='M63.307.681c8.659 0 12.988 5.888 12.988 13.68 0 7.446-4.849 13.682-13.508 13.682-8.658 0-12.987-5.889-12.987-13.682 0-7.446 4.848-13.68 13.507-13.68zm-.52 1.732c-3.81 0-4.849 5.195-4.849 11.948 0 6.58 1.732 11.948 5.196 11.948 3.98 0 5.021-5.195 5.021-11.948 0-6.58-1.73-11.948-5.368-11.948zM127.378 14.535c0-7.1 4.502-13.854 13.334-13.854 7.271 0 10.736 5.369 10.736 12.468h-16.105c-.174 6.407 2.943 11.083 9.178 11.083 2.771 0 4.156-.691 5.889-1.904l.691.865c-1.732 2.424-5.541 4.85-10.389 4.85-7.793-.001-13.334-5.542-13.334-13.508zm7.965-3.29l8.139-.174c0-3.463-.52-8.658-3.463-8.658s-4.504 4.848-4.676 8.832zM172.058 2.067C169.98 1.2 167.21.681 164.093.681c-6.406 0-10.391 3.809-10.391 8.312s2.941 6.407 7.102 7.793c4.328 1.557 5.541 2.77 5.541 4.848s-1.559 3.982-4.33 3.982c-3.289 0-5.715-1.904-7.619-7.1l-1.213.348.174 7.619c2.078.865 5.887 1.559 9.178 1.559 6.754 0 11.084-3.465 11.084-8.832 0-3.637-1.906-5.714-6.408-7.447-4.85-1.904-6.58-3.116-6.58-5.368 0-2.251 1.561-3.81 3.639-3.81 3.115 0 5.193 1.905 6.754 6.581l1.211-.346-.177-6.753zM98.806 1.374c-2.943-1.73-8.139-.866-10.909 5.369l.172-6.061-11.601 2.251v1.039l1.212.173c1.56.174 2.251 1.039 2.425 3.291.346 4.156.173 11.43 0 15.066-.174 2.076-.865 3.115-2.425 3.289l-1.212.174v1.385h16.104v-1.385l-2.078-.174c-1.731-.174-2.251-1.213-2.425-3.289-.346-3.291-.346-9.871-.172-14.027.865-1.213 4.675-2.251 8.138 0l2.771-7.101z'
                fill='#fff'
              />
            </svg>
          </div>

          <div className='flex'>
            {/* MONCLER */}
            <svg
              className='block h-36 w-36 ml-auto md:h-60 md:w-60 lg:h-64 lg:w-64'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 192.756 192.756'
            >
              <g fill='#fff' fillRule='evenodd' clipRule='evenodd'>
                <path fill='transparent' d='M0 0h192.756v192.756H0V0z' />
                <path d='M32.034 86.082c.301-.791.564-1.544.564-2.334v-.038h6.513v.113c-.903.264-1.167 1.355-1.167 2.221l2.485 18.486c.226 1.77.414 2.785 1.92 3.84v.113h-7.267v-.113c1.317-.414 1.544-1.543 1.544-2.824L34.48 87.4l-8.433 21.572c-1.883-1.43-2.41-2.447-3.313-4.555l-7.153-16.979-2.146 16.188c-.301 2.297-.565 3.953 1.205 4.744v.113H8.504v-.113c1.582-1.393 1.807-3.238 2.108-5.271l2.146-15.774c.151-1.054.564-2.561-1.167-3.501v-.113h6.588v.038c0 .602.302 1.167.527 1.694l7.078 16.604 6.25-15.965zM70.771 95.832c0 7.68-6.363 13.252-13.854 13.252-7.455 0-13.742-5.346-13.742-13.063 0-7.153 6.212-13.14 14.118-12.951 7.907-.038 13.478 5.985 13.478 12.762zm-23.304-.151c0 5.272 3.727 10.692 9.638 10.692 5.723 0 9.375-4.178 9.375-9.787 0-5.498-3.501-10.806-9.45-10.806-5.836 0-9.563 4.217-9.563 9.901zM77.616 103.588c0 2.107-.038 3.613 1.958 4.781v.113H72.91v-.113c1.995-1.168 1.995-2.674 1.995-4.781V88.566c0-2.108 0-3.614-1.958-4.744v-.113h5.497v.038c.15.452.301.64.565.941l.526.753 13.779 17.393V88.566c0-2.108.038-3.614-1.958-4.744v-.113h6.627v.113c-1.958 1.129-1.958 2.635-1.958 4.744v21.122c-2.673-.904-3.84-2.146-5.497-4.293L77.616 89.018v14.57zM119.594 88.377c-2.07-1.317-4.48-2.146-6.965-2.146-5.195 0-8.811 3.803-8.811 9.261 0 5.534 3.766 10.466 9.562 10.466 2.824 0 5.648-1.016 8.02-2.371h.113l-1.92 4.367c-1.77.828-3.727 1.129-5.686 1.129-8.885 0-14.381-4.969-14.381-13.026 0-7.793 5.496-12.951 13.215-12.951 2.297 0 4.631.414 6.852.941v4.33h.001zM133.631 105.771c2.561.15 4.781-.715 6.664-2.297h.113l-1.957 5.008h-15.475v-.113c1.92-.678 1.695-3.463 1.695-5.158V89.018c0-1.731.225-4.48-1.695-5.195v-.113h7.191v.113c-1.92.715-1.656 3.501-1.656 5.195v16.414l5.12.339zM148.043 105.32l4.781.451c2.484.227 5.082-.564 6.965-2.221h.113l-1.695 4.932h-15.699v-.113c1.92-.678 1.695-3.463 1.695-5.158V89.018c0-1.731.225-4.48-1.695-5.195v-.113h12.049c.639 0 1.279.075 1.768-.188h.113v4.405h-.113c-1.166-1.355-2.709-1.506-4.441-1.506-1.318 0-2.635.038-3.84.263v7.003h4.48c.602 0 1.203 0 1.656-.226h.113v3.991h-.113c-.604-1.092-2.184-1.055-3.352-1.055h-2.785v8.923zM170.924 83.709c5.045 0 7.793 2.635 7.793 6.061 0 3.313-2.898 5.911-5.984 6.626l5.42 6.814c1.582 1.959 3.953 3.916 6.1 5.271h-3.463c-1.996 0-3.238-.49-4.367-1.883l-4.594-5.686-3.463-5.308c3.012-.452 6.512-1.845 6.512-5.384 0-2.71-2.334-4.292-4.855-4.179a19.79 19.79 0 0 0-2.561.301v16.866c0 1.732-.227 4.48 1.695 5.158v.113h-7.191v-.113c1.92-.678 1.656-3.463 1.656-5.158v-14.19c0-1.731.264-4.48-1.656-5.195v-.113h8.958v-.001z' />
              </g>
            </svg>

            {/* GQ */}
            <svg
              className='block h-36 w-36 mr-auto md:h-60 md:w-60 lg:h-64 lg:w-64'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 25.26 12.6'
            >
              <path
                fill='#fff'
                d='M24.42 9.24a6.139 6.139 0 0 0 .72-2.94c.005-3.46-2.813-6.278-6.3-6.3-3.342.021-6.082 2.645-6.3 5.94.018-.184.001-.377 0-.54H6.72v2.64l1.86.06c-.549.653-1.37 1.088-2.28 1.08A2.862 2.862 0 0 1 3.42 6.3C3.417 4.729 4.702 3.442 6.3 3.42c1.063.022 2 .612 2.52 1.5l2.94-1.68A6.293 6.293 0 0 0 6.3 0C2.813.021-.005 2.839 0 6.3a6.279 6.279 0 0 0 6.3 6.3c3.337.008 6.073-2.607 6.3-5.88.167 3.273 2.903 5.889 6.24 5.88 1.229.008 2.365-.337 3.3-.96l.78.78 2.34-2.34-.84-.84z'
              />
              <path
                d='M21.72 6.72l-.6-.54-2.22 2.34.66.6a3.797 3.797 0 0 1-.72.06c-1.575.008-2.861-1.278-2.88-2.88a2.93 2.93 0 0 1 2.88-2.88c1.598.022 2.884 1.309 2.88 2.88.004.151-.006.286 0 .42z'
                fill='rgba(6, 95, 70, var(--tw-bg-opacity)'
              />
            </svg>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className='text-center lg:mb-20'>
        <div className='mx-auto px-4 sm:py-24 md:pt-2 md:pb-0 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='my-12 text-3xl lg:text-6xl lg:my-20'>
            Shop the store
          </h2>
          <div className='grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-8'>
            <div className='relative'>
              <div className='aspect-w-3 aspect-h-4 sm:aspect-none shop-img overflow-hidden'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                  alt='placeholder'
                  className='w-full h-full object-center object-cover product'
                />
                <p
                  aria-hidden='true'
                  className='text-2xl font-medium absolute text-white top-1/2 text-center w-full lg:text-6xl'
                >
                  Shirts
                </p>
              </div>
            </div>
            <div className='group relative '>
              <div className='aspect-w-3 aspect-h-4 sm:aspect-none shop-img overflow-hidden'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                  alt='placeholder'
                  className='w-full h-full object-center object-cover product'
                />
                <p
                  aria-hidden='true'
                  className='text-2xl font-medium absolute text-white top-1/2 text-center w-full lg:text-6xl'
                >
                  Shorts
                </p>
              </div>
            </div>
            <div className='group relative '>
              <div className='aspect-w-3 aspect-h-4 sm:aspect-none shop-img overflow-hidden'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                  alt='placeholder'
                  className='w-full h-full object-center object-cover product'
                />
                <p
                  aria-hidden='true'
                  className='text-2xl font-medium absolute text-white top-1/2 text-center w-full lg:text-6xl'
                >
                  Caps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
