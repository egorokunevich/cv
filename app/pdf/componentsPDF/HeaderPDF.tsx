import { View, Text } from '@react-pdf/renderer';
import { Image as PDFImage } from '@react-pdf/renderer'; // Due to Image component lacking alt prop

import styles from './styles';

const HeaderPDF = () => {
  return (
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
  );
};

export default HeaderPDF;
