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
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div>
            <p>100%</p>
            <p>Completion</p>
          </div>
          <div>
            <p>24/7</p>
            <p>Delivery</p>
          </div>
          <div>
            <p>100k%</p>
            <p>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
