interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return <span className="skill p-2">{skill}</span>;
};

export default Skill;
