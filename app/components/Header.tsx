import Image from 'next/image';

import photo from '@/public/images/photo.png';

const Header = () => {
  return (
    <header
      className="px-2 h-40 max-xsm:h-32 flex justify-between w-full"
      style={{ backgroundColor: '#37383d', color: '#feffff' }}
    >
      <div className="flex flex-col">
        <h1 className="w-full text-6xl max-lg:text-4xl max-xsm:text-2xl font-light flex justify-start p-4 max-xsm:p-2 max-xxsm:p-1 max-xxsm:pb-0 duration-200">
          Yahor Akunevich
        </h1>
        <h2 className="w-full text-4xl max-lg:text-2xl max-xsm:text-xl font-extralight flex justify-start p-4 max-xsm:p-2 max-xxsm:p-1 max-xxsm:pt-0 pt-0 duration-200">
          Junior Frontend Developer
        </h2>
      </div>
      <div className="flex justify-center items-center p-4 sm:hidden">
        <div className="flex items-center justify-center overflow-hidden w-24 h-24 max-xsm:w-20 max-xsm:h-20 rounded-full">
          <Image
            className="photo duration-200 w-24 h-24 max-xsm:w-20 max-xsm:h-20 rounded-full"
            src={photo}
            alt={'photo'}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
