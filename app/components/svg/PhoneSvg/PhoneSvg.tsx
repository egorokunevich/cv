import * as React from 'react';
import { SVGProps } from 'react';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const PhoneSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={SvgPath.PhoneSvgPath}
    />
  </svg>
);
export default PhoneSvg;
