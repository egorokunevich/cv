import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  renderToStream,
} from '@react-pdf/renderer';
import { Image as PDFImage } from '@react-pdf/renderer'; // Due to Image component lacking alt prop
import { NextResponse } from 'next/server';

import EmailSvgPDF from '@/app/components/svg/EmailSvg/EmailSvgPDF';
import GithubSvgPDF from '@/app/components/svg/GithubSvg/GithubSvgPDF';
import PhoneSvgPDF from '@/app/components/svg/PhoneSvg/PhoneSvgPDF';
import TelegramSvgPDF from '@/app/components/svg/TelegramSvg/TelegramSvgPDF';

const styles = StyleSheet.create({
  section: { padding: '10px' },
  header: {
    padding: '10px',
    paddingHorizontal: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100px',
    backgroundColor: '#37383D',
    color: '#FEFFFF',
  },
  aside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '200px',
    padding: '10px',
    backgroundColor: '#EEE7E1',
    color: '#393836',
  },
  h1: {
    fontSize: '40px',
    fontWeight: 'light',
  },
  h2: {
    fontFamily: 'Helvetica',
    fontSize: '24px',
    fontWeight: 'extralight',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <View style={styles.header}>
          {/* Photo */}
          <View
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <PDFImage src={'./public/images/photo.png'} />
          </View>
          {/* Title */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Text style={styles.h1}>Yahor Akunevich</Text>
            <Text style={styles.h2}>Junior Frontend Developer</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {/* Aside */}
          <View style={styles.aside}>
            <Text style={styles.h2}>Contacts</Text>
            <EmailSvgPDF />
            <GithubSvgPDF />
            <PhoneSvgPDF />
            <TelegramSvgPDF />
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export const GET = async () => {
  const stream = await renderToStream(<MyDocument />);
  return new NextResponse(stream as unknown as ReadableStream);
};
