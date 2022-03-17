import { ArrowSmRightIcon, PhoneIcon } from '@heroicons/react/outline';
import React from 'react';
import SupportImg from '../assets/images/support.jpg';

const Support = () => {
  return (
    <div className='w-full h-screen mt-24'>
      <div className='w-full h-[700px bg-gray-900/90 absolute'>
        <img
          src={SupportImg}
          alt='suppot_img'
          className='w-full h-full object-cover mix-blend-overlay'
        />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>
            Support
          </h2>
          <h3 className='text-5xl font-bold py-6 text-center'>
            Finding the right team
          </h3>
          <p className='py-4 text-2xl text-slate-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
            iure molestiae aliquid perferendis. Voluptatum ea quae veritatis
            beatae ad sint mollitia dolorem, quod eaque recusandae molestiae
            deleniti. Quis, consequatur!
          </p>
        </div>
        <div>
          <div>
            <div>
              <PhoneIcon />
              <h3>Sales</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                pariatur nulla assumenda nemo consequatur accusamus dignissimos
                quam veritatis soluta sit quos alias, cum enim perspiciatis
                voluptatum sed vel voluptas itaque?
              </p>
            </div>
            <div>
              <p>
                Contact Us <ArrowSmRightIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
