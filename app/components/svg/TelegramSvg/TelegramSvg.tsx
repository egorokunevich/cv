import * as React from 'react';
import { SVGProps } from 'react';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const TelegramSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill={props.fill} d={SvgPath.TelegramSvgPath} />
  </svg>
);
export default TelegramSvg;
