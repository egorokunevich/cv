interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <span
      className="p-2 bg-green-100 hover:bg-emerald-300"
      style={{
        transition: '0.2s',
        cursor: 'default',
        border: '1px solid rgb(0,0,0,0.1)',
      }}
    >
      {skill}
    </span>
  );
};

export default Skill;
