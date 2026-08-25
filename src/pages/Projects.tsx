import { useEffect, useState } from "react";

import Api from "../functions/Api";
import { GetEndpoint } from "../functions/NonApi";

interface Project {
    id: string;
    name: string;
    description: string | null;
}

function Dashboard() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await Api.get("/projects/");
            setProjects(response.data);
        };

        getProjects();
    }, []);

    return (
        <>
            <h1>Мои проекты</h1>
            <a type="button" className="btn btn-sm btn-outline-secondary" href="/projects/create"><h3>Создать проект</h3></a>

            <div className="album py-5 bg-body-tertiary"> 
                <div className="container"> 
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
                        {projects.map((project) => (
                            <div className="col" key={project.id}> 
                                <div className="card shadow-sm"> 
                                    <h2>{project.name}</h2>
                                    <div className="card-body"> 
                                        <p className="card-text">{project.description}</p> 
                                        <div className="d-flex justify-content-between align-items-center"> 
                                            <div className="btn-group"> 
                                                <a type="button" className="btn btn-sm btn-outline-secondary" 
                                                    href={`${GetEndpoint()}/pages/${project.id}`}>Открыть лендинг</a> 
                                                <a type="button" className="btn btn-sm btn-outline-secondary" 
                                                    href={`/projects/${project.id}`}>Редактировать проект</a> 
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                        ))}
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Dashboard;