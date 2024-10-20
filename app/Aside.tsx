import Image from 'next/image';
import emailIcon from '../public/icons/email.png';
import phoneIcon from '../public/icons/phone.png';
import telegramIcon from '../public/icons/telegram.png';
import githubIcon from '../public/icons/github.png';
import photo from '../public/images/photo.jpeg';
import SkillLevel from './SkillLevel';
import AsideSection from './AsideSection';

const Aside = () => {
  return (
    <aside
      className="flex flex-col  items-center px-4 py-8 gap-4 max-w-80 w-full"
      style={{
        backgroundColor: '#DAD2BC',
        boxShadow: '-2px 0 5px -3px inset black',
        // borderColor: '#292E1E',
        // borderRight: '1px solid',
      }}
    >
      <div
        className="flex items-center justify-center overflow-hidden"
        style={{ width: '250px', height: '250px', borderRadius: '50%' }}
      >
        <Image
          className="photo"
          src={photo}
          width={250}
          height={250}
          alt={'photo'}
        />
      </div>
      <div className="flex flex-col justify-center p-3 gap-6">
        <AsideSection title="Contacts">
          <a
            href="mailto:egorokunevich@gmail.com"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <Image src={emailIcon} width={24} height={24} alt={'email'} />
            <span>egorokunevich@gmail.com</span>
          </a>
          <a
            href="tel:+375447561377"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <Image src={phoneIcon} width={24} height={24} alt={'phone'} />
            <span>+ 375 (44) 756-13-77</span>
          </a>
          <a
            href="https://t.me/+375447561377"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <Image src={telegramIcon} width={24} height={24} alt={'telegram'} />
            <span>@egorokunevich</span>
          </a>
          <a
            href="https://github.com/egorokunevich"
            className="contact p-1 flex items-center w-full gap-4"
          >
            <Image src={githubIcon} width={24} height={24} alt={'github'} />
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
