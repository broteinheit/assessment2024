import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

const ProjectSelection = () => {
    const context = useContext(ProjectContext);
    console.log(context);

    return (<div>
        {context?.projects.map((p) => <div>{p.id} {p.name}</div>)}
        <div>SelectedId: {context?.selectedProjectId}</div>
    </div>)
}

export default ProjectSelection;