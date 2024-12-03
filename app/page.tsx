import Aside from './Aside';
import EducationArticle from './EducationArticle';
import Header from './Header';
import Section from './Section';
import Skill from './Skill';
import skillsData from './skillsData.json';

export default function Home() {
  return (
    <div
      className="flex flex-row max-sm:flex-col-reverse w-full"
      style={{
        boxShadow: '0 0 5px -3px #808080',
      }}
    >
      <Aside />
      <section className="w-full">
        <Header />
        <Section title="About me">
          <p
            className="p-2"
            style={{ textIndent: '2rem', textAlign: 'justify' }}
          >
            I am a junior web developer with a solid foundation in JavaScript,
            TypeScript, and modern frontend frameworks like React and Next.js. I
            am passionate about building responsive, user-friendly web
            applications and continuously learning new technologies to expand my
            skills. I enjoy working in collaborative environments where I can
            grow, contribute, and deliver clean, efficient code.
          </p>
        </Section>
        <Section title="Education">
          <EducationArticle
            title={'Belarusian National Technical University'}
            years={[2016, 2021]}
            faculty="Faculty of Instrumentation"
            specialization="Security Engineering"
          />
          <EducationArticle
            title={'The Rolling Scopes School'}
            years={[2023, 2024]}
            faculty="JavaScript, React courses"
            specialization="Front-End Developer"
          />
        </Section>
        <Section title="Skills">
          <div className="flex  flex-wrap gap-3">
            {skillsData.skills.map((skill, i) => {
              return <Skill skill={skill} key={skill + i} />;
            })}
          </div>
        </Section>
      </section>
    </div>
  );
}
