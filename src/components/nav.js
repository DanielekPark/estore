import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Nav() {
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto px-2 lg:py-3 w-11/12 lg:px-0'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center lg:mr-6'>
                  <a href='#' className='flex items-center'>
                    <svg
                      className='fill-current h-8 w-8 mr-2'
                      width='54'
                      height='54'
                      viewBox='0 0 54 54'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
                    </svg>

                    <span className='self-center text-3xl font-semibold whitespace-nowrap dark:text-white'>
                      E-shop
                    </span>
                  </a>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <a
                    href='#'
                    className='text-gray-900 inline-flex items-center px-1 pt-1 text-xl'
                  >
                    Shop
                  </a>
                  <a
                    href='#'
                    className='text-gray-900 inline-flex items-center px-1 pt-1 text-xl'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='text-gray-900 inline-flex items-center px-1 pt-1 text-xl'
                  >
                    Personalize
                  </a>
                </div>
              </div>
                <div className='my-auto ml-auto mr-4'>
                  <select
                    id='countries'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                  >
                    <option defaultValue>Language</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                  </select>
                </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>

                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 '>
                      <span className='sr-only'>Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='mt-12 pt-2 pb-3 space-y-1'>
              <Disclosure.Button
                as='a'
                href='#'
                className='block pl-3 pr-4 py-2 border-l-4 text-2xl font-semibold'
              >
                Shop All
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-2xl font-semibold'
              >
                Shirts
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-2xl font-semibold'
              >
                Shorts
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-2xl font-semibold'
              >
                Caps
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-2xl font-semibold'
              >
                Popular
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
