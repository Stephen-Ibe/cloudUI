import React from 'react';

const About = () => {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>
            Trusted by developers across the world
          </h2>
          <p className='text-2xl py-6 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            sapiente, quibusdam mollitia illum corporis vel?
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-4 px-2 text-center'>
          <div className='border py-8 rounded-md shadow-md'>
            <p className='text-6xl font-bold text-indigo-500'>100%</p>
            <p className='text-gray-400 mt-2'>Completion</p>
          </div>
          <div className='border py-8 rounded-md shadow-md'>
            <p className='text-6xl font-bold text-indigo-500'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
          </div>
          <div className='border py-8 rounded-md shadow-md'>
            <p className='text-6xl font-bold text-indigo-500'>100k</p>
            <p className='text-gray-400 mt-2'>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
