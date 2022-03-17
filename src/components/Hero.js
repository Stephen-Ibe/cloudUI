import React from 'react';
import HeroImg from '../assets/images/cyber-bg.png';
import {
  CloudUploadIcon,
  DatabaseIcon,
  ServerIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto my-60'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>
            Cloud Management
          </h1>
          <p className='text-2xl'>
            Absolute tech solutions for your cloud needs
          </p>
          <button className='py-2 px-8 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img src={HeroImg} alt='hero_img' className='w-full' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'>
              <CloudUploadIcon className='h-6 text-indigo-600' /> App Security
            </p>
            <p className='flex px-4 py-2 text-slate-500'>
              <DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design
            </p>
            <p className='flex px-4 py-2 text-slate-500'>
              <ServerIcon className='h-6 text-indigo-600' />
              Cloud Data
            </p>
            <p className='flex px-4 py-2 text-slate-500'>
              <PaperAirplaneIcon className='h-6 text-indigo-600' /> API
              Monitoring
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
