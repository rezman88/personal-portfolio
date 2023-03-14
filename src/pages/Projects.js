import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const myArr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {myArr.map((proj) => {
        return <ProjectCard number={proj} />;
      })}
    </div>
  );
};

export default Projects;
