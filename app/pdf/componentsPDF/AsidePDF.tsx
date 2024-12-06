import { View, Text, Link } from '@react-pdf/renderer';

import styles from './styles';

import EmailSvgPDF from '@/app/components/svg/EmailSvg/EmailSvgPDF';
import GithubSvgPDF from '@/app/components/svg/GithubSvg/GithubSvgPDF';
import PhoneSvgPDF from '@/app/components/svg/PhoneSvg/PhoneSvgPDF';
import TelegramSvgPDF from '@/app/components/svg/TelegramSvg/TelegramSvgPDF';

interface ContactProps {
  icon: JSX.Element;
  txt: string;
  href: string;
}
const Contact = ({ icon, txt, href }: ContactProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
      }}
    >
      {icon}
      <Link
        style={{
          fontSize: '12px',
          color: '#393836',
          textDecoration: 'none',
        }}
        href={href}
      >
        {txt}
      </Link>
    </View>
  );
};

const AsidePDF = () => {
  return (
    <View style={styles.aside}>
      <Text style={{ ...styles.h3, width: '100%' }}>Contacts</Text>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Contact
          icon={<EmailSvgPDF />}
          txt="mrcraigre@gmail.com"
          href="mailto:egorokunevich@gmail.com"
        />
        <Contact
          icon={<PhoneSvgPDF />}
          txt="+375 (44) 756-13-77"
          href="tel:+375447561377"
        />
        <Contact
          icon={<TelegramSvgPDF />}
          txt="@egorokunevich"
          href="https://t.me/+375447561377"
        />
        <Contact
          icon={<GithubSvgPDF />}
          txt="egorokunevich"
          href="https://github.com/egorokunevich"
        />
      </View>
    </View>
  );
};

export default AsidePDF;
