import * as React from 'react';
import { SVGProps } from 'react';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const EmailSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d={SvgPath.EmailSvgPath}
      style={{
        fill: props.fill,
      }}
    />
  </svg>
);
export default EmailSvg;
