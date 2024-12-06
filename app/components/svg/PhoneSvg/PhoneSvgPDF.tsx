import { View, Svg, Path } from '@react-pdf/renderer';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const PhoneSvgPDF = () => {
  return (
    <View
      style={{
        width: '20px',
        height: '20px',
      }}
    >
      <Svg viewBox="0 0 24 24">
        <Path
          stroke="#393836"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={SvgPath.PhoneSvgPath}
        />
      </Svg>
    </View>
  );
};

export default PhoneSvgPDF;
