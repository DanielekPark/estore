import React from 'react'

export default function Footer() {
  const navigation = {
    products: [
      { name: 'Products', href: '#' },
      { name: 'Shop', href: '#' },
      { name: 'Accesories', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Lifetime Warranty', href: '#' },
      { name: 'Afterpay', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Gifting', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
      },
      {
        name: 'Instagram',
        href: '#',
      },
      {
        name: 'Twitter',
        href: '#',
      },
      {
        name: 'Pinterest',
        href: '#',
      },
    ],
  }

  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      {/* SIGNUP */}
      <section className='text-center'>
        <div className='bg-white lg:flex lg:flex-row-reverse'>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-32 md:px-8 md:items-center lg:w-1/2 lg:mx-0 lg:py-6'>
            <div className='md:w-full lg:text-left'>
              <h3 className='text-center mx-auto w-1/2  py-4 lg:mb-2'>
                Be a part of the community
              </h3>
              <h3 className=' text-gray-900 font-light text-2xl'>
                Sign up for updates, product releases and sales.
              </h3>
            </div>

            {/* SIGNUP INPUT*/}
            <div className='mt-8 lg:mt-0 lg:ml-0'>
              <form className='flex flex-wrap lg:mt-4'>
                <input
                  id='email-address'
                  name='email-address'
                  type='email'
                  autoComplete='email'
                  required
                  className='w-full px-5 py-3 border shadow-sm placeholder-gray-400 focus:ring-1 rounded-md lg:w-8/12 '
                  placeholder='Email'
                />
                <div className='mt-3 rounded-full w-full lg:w-1/4 lg:mt-0 lg:ml-auto'>
                  <button
                    type='submit'
                    className='w-full flex items-center justify-center py-3 px-5 border border-yellow-700 text-base font-medium rounded-full text-yellow-700 bg-transparent focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='group lg:w-1/2'>
            <div className='aspect-w-3 aspect-h-4 sm:aspect-none h-52 lg:h-60'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                alt='placeholder'
                className='w-full h-full object-center object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <div className='lg:flex lg:justify-between lg:w-full'>
        <div className='mx-auto py-10 px-2 sm:px-6 lg:pt-12 lg:px-8 lg:w-full lg:flex lg:justify-between'>
          <div>
            <h3 className='pl-2 md:pl-0 text-gray-900 font-light text-3xl'>
              Designed for everyone.
            </h3>
            <h3 className='py-2 pl-2 md:pl-0 text-gray-900 font-light text-3xl'>
              Made for the world.
            </h3>
          </div>

          {/* FOOTER LINKS */}
          <div className='md:mt-8 lg:mt-0 xl:gap-8'>
            <div className='mt-12 grid grid-cols-3 md:grid-cols-4 md:gap-4 xl:mt-0 lg:gap-x-8 lg:mt-0 xl:w-11/12 lg:mr-20'>
              {/* PRODUCTS */}
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Products
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ABOUT */}
              <div className='md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  About
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SUPPORT */}
              <div className=''>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Support
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIALS */}
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Socials
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-500 hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full justify-between my-6 pt-8 px-2 lg:px-10'>
        <p className='text-base text-gray-400 xl:text-center'>
          &copy; All rights reserved.
        </p>
        <div>
          <svg
            className='inline fill-current h-8 w-8'
            width='54'
            height='54'
            viewBox='0 0 54 54'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
          </svg>
        </div>
      </div>
    </footer>
  )
}
