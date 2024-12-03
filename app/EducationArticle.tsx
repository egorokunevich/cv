interface EducationArticleProps {
  title: string;
  years: [number, number];
  faculty?: string;
  specialization?: string;
  certificateLink?: string;
}

const EducationArticle = ({
  title,
  years,
  faculty,
  specialization,
}: EducationArticleProps) => {
  return (
    <div className="flex justify-between m-1 px-10 py-2 max-lg:flex-col">
      <div className="flex flex-col gap-2 justify-between">
        <h2 className="text-2xl font-semibold max-w-72 max-lg:text-xl">
          {title}
        </h2>
        <div className="flex justify-start max-lg:justify-end">
          {years[0]} - {years[1]}
        </div>
      </div>
      {faculty && specialization && (
        <>
          {/* Divider */}
          <div className="flex items-center">
            <div
              className="flex items-center h-20 w-2px max-lg:h-2px max-lg:w-full"
              style={{ backgroundColor: 'rgb(0,0,0,0.2)' }}
            ></div>
          </div>

          <div className="flex items-center pl-2">
            <div className="flex flex-col gap-2 py-2 h-full justify-between">
              <div className="text-xl">{faculty}</div>
              <div>{specialization}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EducationArticle;
