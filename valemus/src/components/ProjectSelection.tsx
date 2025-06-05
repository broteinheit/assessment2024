import { useContext, useEffect, useState } from "react";
import { Project, ProjectContext } from "./ProjectContext";

const ProjectSelection = () => {
    const context = useContext(ProjectContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project>()
    
    useEffect(() => {
        if (context && context.projects.length > 0) context.setSelectedProjectId(context.projects[0].id);
    }, [context?.projects])

    useEffect(() => {
        setSelectedProject(context?.projects.find((p) => p.id === context.selectedProjectId))
    }, [context?.selectedProjectId])

    const handleDropdownClick = (selected: string) => {
        setIsOpen(false)
        context?.setSelectedProjectId(selected)
    }


    return (
        <div style={{marginBottom: '2rem', marginLeft: '1rem', display: 'flex'}}>
            <div style={{marginRight: '2rem', minWidth: '15vw'}}>
                <strong>Select Project:</strong>
                <button onClick={() => setIsOpen(!isOpen)}>{selectedProject?.name}</button>
                {isOpen &&
                    <ul>
                        {context?.projects.map((p) => <li key={p.id} onClick={() => handleDropdownClick(p.id)}>{p.name}</li>)}
                    </ul>
                }
            </div>
            <div style={{maxWidth: '70vw', display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                <strong style={{minWidth: '20%'}}>Projektname:</strong> <input style={{minWidth: '75%'}} value={selectedProject?.name} disabled/>
                <strong style={{minWidth: '20%'}}>Projektleiter:</strong> <input  style={{minWidth: '75%'}} value={selectedProject?.projektleiter} disabled/>
                <strong style={{minWidth: '20%'}}>Beschreibung:</strong> <textarea value={selectedProject?.beschreibung}  disabled style={{width: '75%', height: '7rem'}}/>
            </div>
        </div>
    )
};

export default ProjectSelection;