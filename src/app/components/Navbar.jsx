import React from 'react'
import NavbarItems from './NavbarItems'

function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
        <NavbarItems title="Trending" param="fetchTrending" />
        <NavbarItems title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar