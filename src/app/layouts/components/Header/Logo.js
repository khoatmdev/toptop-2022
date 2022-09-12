import React from 'react';

import images from '@/assets/images';

const Logo = () => {
    console.log(images.logo);
    return (
        <div>
            <img src={images.logo} alt="" />
        </div>
    );
};

export default Logo;
