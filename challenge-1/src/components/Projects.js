import projects from "../resources/projects.json";
import {ProjectCard} from "./ProjectCard";
export const Projects = () => {
    return (
        <section className={"row justify-content-center"} id={"projects"}>
            <h2 className={"display-6 text-center"}>My Projects</h2>
            {projects.length === 0 ?
                <p>I have no projects :(</p> :
                projects.map((project) => {
                    return (<ProjectCard projectInfo={project} key={"proj" + project.id} />)
                })
            }
        </section>
    );
}