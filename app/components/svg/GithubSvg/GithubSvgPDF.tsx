import { View, Svg, Path } from '@react-pdf/renderer';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const GithubSvgPDF = () => {
  return (
    <View
      style={{
        width: '16px',
        height: '16px',
      }}
    >
      <Svg fill="#393836" viewBox="0 0 20 20">
        <Path d={SvgPath.GithubSvgPath} />
      </Svg>
    </View>
  );
};

export default GithubSvgPDF;
