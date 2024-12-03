import Image from 'next/image';

import AsideSection from './AsideSection';
import SkillLevel from './SkillLevel';
import EmailSvg from './svg/EmailSvg';
import GithubSvg from './svg/GithubSvg';
import PhoneSvg from './svg/PhoneSvg';
import TelegramSvg from './svg/TelegramSvg';

import photo from '@/public/images/photo.png';

const Aside = () => {
  return (
    <aside
      className="flex flex-col  items-center  gap-4 max-w-80 w-80"
      style={{
        backgroundColor: '#eee7e1',
        color: '#393836',
        boxShadow: '-2px 0 5px -3px inset #d4d5d6',
      }}
    >
      <div className="flex flex-col w-full">
        {/* Background wrapper */}
        <div
          className="w-full flex justify-center items-center h-40"
          style={{
            backgroundColor: '#37383d',
          }}
        >
          {/* Photo wrapper */}
          <div
            className="flex items-center justify-center overflow-hidden"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              transform: 'translateY(20px)',
            }}
          >
            <Image
              className="photo"
              src={photo}
              width={140}
              height={140}
              alt={'photo'}
            />
          </div>
        </div>
        {/* Triangle */}
        <div
          className="w-0 h-5"
          style={{
            border: '160px solid transparent',
            borderTop: '80px solid #37383d',
          }}
        ></div>
      </div>

      <div
        className="flex flex-col justify-center px-4 py-8 gap-6"
        style={{ transform: 'translateY(-160px)' }}
      >
        <AsideSection title="Contacts">
          <a
            href="mailto:egorokunevich@gmail.com"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <EmailSvg width={24} height={24} fill="#393836" />

            <span>mrcraigre@gmail.com</span>
          </a>
          <a
            href="tel:+375447561377"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <PhoneSvg width={24} height={24} fill="#393836" />
            <span>+ 375 (44) 756-13-77</span>
          </a>
          <a
            href="https://t.me/+375447561377"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <TelegramSvg width={24} height={24} fill="#393836" />
            <span>@egorokunevich</span>
          </a>
          <a
            href="https://github.com/egorokunevich"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <GithubSvg width={24} height={24} fill="#393836" />
            <span>egorokunevich</span>
          </a>
        </AsideSection>
        <AsideSection title="Languages">
          <SkillLevel skill="English" level="B1+"></SkillLevel>
          <SkillLevel skill="Russian" level="Native"></SkillLevel>
        </AsideSection>
      </div>
    </aside>
  );
};

export default Aside;
