import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Api from "../functions/Api";

interface Project {
    id: string;
    name: string;
    description: string | null;
    current_html: string | null;
    is_published: boolean;
}

function Editor() {
    const { projectId } = useParams();

    const [project, setProject] = useState<Project>();
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        const getProject = async () => {
            const response = await Api.get(`/projects/${projectId}`);
            setProject(response.data);
        };

        getProject();
    }, []);


    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const submitter = (event.nativeEvent as SubmitEvent).submitter;
        if(submitter instanceof HTMLButtonElement) {
            const action = submitter.value;

            if(action === "generate") {
                await Api.post(`/projects/${projectId}/generate`, {
                    prompt: prompt
                }).then((response) => {
                    console.log(response.data);
                });
            } else if(action === "publish") {
                await Api.post(`/projects/${projectId}/publish`).then((response) => {
                    console.log(response.data);
                });
            }
        }  

        window.location.reload()
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="h1 mb-3 fw-normal">Редактор</h1> 
                <h3 className="h3 mb-3 fw-normal">{project?.name}</h3> 
                <p className="mb-3 fw-normal">{project?.description}</p> 
                <p className="mb-3 fw-normal">Текущий HTML: {`${project?.current_html}`}</p> 
                <p className="mb-3 fw-normal">Опубликовано: {`${project?.is_published}`}</p> 
                <div className="form-floating"> 
                    <textarea className="form-control" id="floatingInput" style={{ height: "400px" }}
                        value={prompt}
                        onChange={(event) => setPrompt(event.target.value)} /> 
                    <label htmlFor="floatingInput">Запрос</label> 
                </div>
                <button className="btn btn-primary w-50 py-2" type="submit" value="generate">Отправить</button> 
                <button className="btn btn-primary w-50 py-2" type="submit" value="publish">Опубликовать</button> 
            </form>
        </>
    );
}

export default Editor;