'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import photo from '@/public/images/photo.png';

const Header = () => {
  const [width, setWidth] = useState<number>(1920);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <header
      className="px-2 h-40 max-xsm:h-32 flex justify-between w-full"
      style={{ backgroundColor: '#37383d', color: '#feffff' }}
    >
      <div className="flex flex-col">
        <h1 className="w-full text-6xl max-lg:text-4xl max-xsm:text-3xl font-light flex justify-start p-4 max-xsm:p-2 ">
          Yahor Akunevich
        </h1>
        <div className="w-full text-4xl max-lg:text-2xl max-xsm:text-xl font-extralight flex justify-start p-4 max-xsm:p-2 pt-0">
          Junior Frontend Developer
        </div>
      </div>
      {width < 640 && (
        <div className="flex justify-center items-center p-4">
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              width: width >= 490 ? '100px' : '80px',
              height: width >= 490 ? '100px' : '80px',
              borderRadius: '50%',
            }}
          >
            <Image
              className="photo"
              src={photo}
              width={width >= 490 ? 100 : 80}
              height={width >= 490 ? 100 : 80}
              alt={'photo'}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
