export const ProjectCard = ({projectInfo}) => {
    return(
        <div className={"col-md-4"}>
            <div className={"card mb-4"} style={{minHeight: "16rem"}}>
                <div className={"card-body"} >
                    <h5 className={"card-title"}>{projectInfo.title}</h5>
                    <img className={"w-100"} src={projectInfo.image_src} alt={"Image of " + projectInfo.title} />
                    <ul className={"card-text list-unstyled"}>
                        <li className={"repoLink"}>
                            <strong>Source:</strong> <a className={"link-dark"} href={projectInfo.source_link}>{projectInfo.source_link}</a>
                        </li>
                        <li className={"appLink"}>
                            <strong>URL:</strong> <a className={"link-dark"} href={projectInfo.app_link}>{projectInfo.app_link}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}