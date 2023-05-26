import { useQuery } from "@apollo/client";

import { GET_PROJECTS } from "../queries/ProjectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Error Occurred: {error.message}</p>;
  return (
    <>
      {data.projects.length === 0 ? (
        <p>No projects available</p>
      ) : (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
