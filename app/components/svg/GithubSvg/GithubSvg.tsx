import * as React from 'react';
import { SVGProps } from 'react';

import SvgPath from '@/app/components/svg/SvgPaths.json';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 20 20"
    {...props}
  >
    <title>{'github [#142]'}</title>
    <path fill={props.fill} fillRule="evenodd" d={SvgPath.GithubSvgPath} />
  </svg>
);
export default SvgComponent;
