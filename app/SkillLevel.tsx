interface SkillLevelProps {
  skill: string;
  level: string;
}

const SkillLevel = ({ skill, level }: SkillLevelProps) => {
  return (
    <div className="flex items-center justify-between">
      <span>{skill}</span>
      <div
        className="w-full mx-3"
        style={{ height: '1px', backgroundColor: 'rgb(0,0,0,0.1)' }}
      ></div>
      <span>{level}</span>
    </div>
  );
};

export default SkillLevel;
