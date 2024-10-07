import React from 'react';
import { Search } from 'react-feather';

export default function Header({ search, setSearch }) {
  return (
    <header className='flex items-center gap-5 py-5'>
      <div className=' text-2xl font-semibold spacing'>
        Pop<span className='text-red-500'>Games</span>
      </div>
      <div className='bg-[#3B3B3B] flex-1 flex items-center justify-between rounded-lg overflow-hidden'>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className='py-3 flex-1 bg-[#3B3B3B]  pl-6 border-none focus:outline-none'
          type='text'
          placeholder='Search game'
        />
        <div className='px-3'>
          <Search />
        </div>
      </div>
    </header>
  );
}
