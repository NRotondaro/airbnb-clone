import Image from 'next/image';
import React from 'react';

export const MediumCard = ({ img, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image className='rounded-xl' alt='medium-card-image' layout='fill' src={img} />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  );
};
