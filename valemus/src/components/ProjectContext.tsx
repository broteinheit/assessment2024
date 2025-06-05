import { createContext, ReactNode, useEffect, useState } from "react";


export interface CommonData {
    selectedProject: number,
    setSelectedProject: (value: number) => void,
    projects: [],
    categories: [],
}

export const ProjectContext = createContext<CommonData | undefined>(undefined);

const ProjectContextProvider: React.FC<{children?: ReactNode, getProjects?: () => [], getCategories?: () => []}> = ({children, getProjects, getCategories}) => {
    const [selectedProject, setSelectedProject] = useState<number>(-1);

    return (
        <ProjectContext.Provider value={{selectedProject, setSelectedProject, projects: getProjects?.() ?? [], categories: getCategories?.() ?? []}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;