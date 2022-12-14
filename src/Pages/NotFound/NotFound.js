import React from 'react';
import Error from '../../Assets/error-404.png';

const goBack = () => window.history.back();

const NotFound = () => (
    <div className='flex h-screen justify-center items-center'>
        <img className='relative' src={Error} alt="" />
        <button onClick={goBack} className='btn btn-primary absolute top-20' to='/'>Page Not Found! Go Back</button>
    </div>
);

export default NotFound;