import React from 'react';

const CustomButton = () => {
  return (
    <div className='flex '>
      <div className='mb-5 items-center'>
        <a
          href="#"
          className="rounded-lg bg-blue-500 px-6 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          View Exam Tips
        </a>
      </div>
    </div>
  );
};

export default CustomButton;
