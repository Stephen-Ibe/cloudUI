import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p>Unique Sequencing & Production</p>
          <h1>Cloud Management</h1>
          <p>Absolute tech solutions for your cloud needs</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
