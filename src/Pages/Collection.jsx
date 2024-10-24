import React, { useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react';
import { assets } from '../assets/assets';

const Collection = () => {

  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* FILTER OPTIONS */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS 
        <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} sm:block`} src={assets.dropdown_icon} alt="" /></p>

        {/* CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? " " : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" name="Men" id="Men" value={'Men'} /> Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" name="women" id="women" value={'women'} /> Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" name="Kids" id="Kids" value={'Kids'} /> Kids
              </p>
            </div>
        </div>

        {/* SubCaterory FIlter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? " " : "hidden"} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" name="Topwear" id="Topwear" value={'Topwear'} /> Topwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" name="Bottomwear" id="Bottomwear" value={'Bottomwear'} /> Bottomwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" name="Winterwear" id="Winterwear" value={'Winterwear'} /> Winterwear
              </p>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Collection;
