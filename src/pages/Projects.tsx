import { useEffect, useState } from "react";

import Api from "../functions/Api";

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
            <a href="/projects/create"><h3>Создать проект</h3></a>

            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    );
}

export default Dashboard;