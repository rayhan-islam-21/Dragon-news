import React from 'react';
import { useParams } from 'react-router';

const Catagorynews = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            Catagory News ({params.id})
        </div>
    );
};

export default Catagorynews;