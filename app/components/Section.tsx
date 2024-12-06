import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  title: string;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="p-5 max-lg:p-2 text-lg">
      <h2 className="text-3xl px-5 flex justify-end">{title}</h2>
      <div
        className="w-full "
        style={{
          height: '1px',
          backgroundColor: 'rgb(0,0,0,0.2)',
          marginBottom: '1rem',
        }}
      ></div>
      {children}
    </div>
  );
};

export default Section;
