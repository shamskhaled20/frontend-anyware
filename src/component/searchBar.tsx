import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
const SearchBarHomeUser = () => {
  return (
    <div className="flex rounded-custom bg-transparent w-[500px] border border-gray-300 p-2 items-center justify-center">
      <div className='flex flex-1 items-center px-2'>
        <input
          type="text"
          className="bg-transparent flex-1 pl-2 text-[#cccccc] outline-0"
          placeholder="Search...
          "
        />
        <MagnifyingGlassIcon className='w-6 h-6 ml-2' />
      </div>
    </div>
  );
};

export default SearchBarHomeUser;
