import { createContext, ReactNode, useEffect, useState } from "react";

export interface Project {id: string, name: string, projektleiter: string, beschreibung: string, modifiedAt: Date, modifiedBy: string};
export interface Category {id: string, name: string}

export interface CommonData {
    selectedProjectId?: string,
    setSelectedProjectId: (value: string) => void,
    projects: Project[],
    categories: Category[],
};

export const ProjectContext = createContext<CommonData | undefined>(undefined);

const ProjectContextProvider: React.FC<{children?: ReactNode, getProjects?: () => Promise<Project[]>, getCategories?: () => Promise<Category[]>}> = ({children, getProjects, getCategories}) => {
    const [selectedProjectId, setSelectedProjectId] = useState<string>();
    const [projects, setProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            getProjects && setProjects((await getProjects()).sort((a, b) => a.name.localeCompare(b.name)));
            getCategories && setCategories(await getCategories());
        }

        fetchData();
    }, [getProjects, getCategories])

    return (
        <ProjectContext.Provider value={{selectedProjectId, setSelectedProjectId, projects, categories}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;