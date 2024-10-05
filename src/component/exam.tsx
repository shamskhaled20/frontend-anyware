import React from 'react';
import CustomButton from './customButton';
const Exam =()=>{
    return (
        <div className="w-full mr-6 ml-6 z-0 bg-white shadow-lg p-6 justify-start ">
          <h3 className='text-4xl text-blue-800 mb-2'>
            Exam Time 
          </h3>
          <p className='text-lg text-gray-500 mb-2'>
            Here we are , If you implemented the business rules correctly
          </p>
          <h3 className='text-sm text-blue-300 mb-2'>
           "If you implemented the business rules correctly"-albert dwdar
          </h3>
          <CustomButton/>
        </div>
    )
}
export default  Exam ;