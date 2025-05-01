import React from 'react';
import Marquee from "react-fast-marquee";

const Marqurey = () => {
    return (
        <div className='w-11/12 mx-auto  mt-6 flex justify-center items-center gap-3 bg-[#F3F3F3] p-4'>
            <div>
            <p className='px-3 py-2 text-xl  text-white bg-[#D72050]'>Latest</p>
            </div>
          <div className='text-xl text-[#403F3F] font-semibold'>
            <Marquee speed={60} pauseOnHover={true}  >
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
          </div>
        </div>
    );
};

export default Marqurey;