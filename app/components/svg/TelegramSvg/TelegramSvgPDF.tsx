import { View, Svg, Path } from '@react-pdf/renderer';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const TelegramSvgPDF = () => {
  return (
    <View
      style={{
        width: '16px',
        height: '16px',
      }}
    >
      <Svg fill="#393836" viewBox="0 0 48 48">
        <Path d={SvgPath.TelegramSvgPath} />
      </Svg>
    </View>
  );
};

export default TelegramSvgPDF;
