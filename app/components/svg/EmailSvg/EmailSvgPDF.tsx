import { View, Svg, Path } from '@react-pdf/renderer';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const EmailSvgPDF = () => {
  return (
    <View
      style={{
        width: '20px',
        height: '20px',
      }}
    >
      <Svg fill="#393836" viewBox="0 0 512 512">
        <Path d={SvgPath.EmailSvgPath} />
      </Svg>
    </View>
  );
};

export default EmailSvgPDF;
