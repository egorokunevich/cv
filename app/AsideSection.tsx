import { PropsWithChildren } from 'react';

interface AsideSectionProps extends PropsWithChildren {
  title: string;
}

const AsideSection = ({ title, children }: AsideSectionProps) => {
  return (
    <div>
      <h2 className="text-2xl mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default AsideSection;
