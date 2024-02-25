import { ReactNode } from 'react';

type SvgProps = {
  width: number;
  height: number;
  children: ReactNode;
};

const Svg = ({ width, height, children }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export default Svg;
