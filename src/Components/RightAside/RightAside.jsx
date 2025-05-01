import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightAside = () => {
    return (
        <div className='flex flex-col  gap-4'>
            <h1 className='text-xl font-semibold text-black'>Login With</h1>
         <div className='flex flex-col items-end gap-3'>
         <button className='btn w-full btn-outline text-sm'> <FcGoogle size={30} /> Login with Google</button>
         <button className='btn w-full btn-outline text-sm'> <FaGithub size={30} /> Login with Github</button>
         </div>
        </div>
    );
};

export default RightAside;