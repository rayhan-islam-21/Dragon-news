import React, { Suspense } from 'react';
import Catagories from '../../Layouts/Catagories/Catagories';



const LeftAside = () => {

    return (
        <div>
            <h1 className='text-xl font-semibold text-black'>All Catagory(11)</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;