import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Api from "../functions/Api";

function CreateProject() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        await Api.post("/projects", {
            name: name,
            description: description
        })

        navigate("/projects");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Создание проекта</h1> 
                <div className="form-floating"> 
                    <input type="text" className="form-control" id="floatingInput" placeholder="Автосервис" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required /> 
                    <label htmlFor="floatingInput">Название проекта</label> 
                </div> 
                <div className="form-floating"> 
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Автосервис на ул. Пушкина, 67"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required /> 
                    <label htmlFor="floatingPassword">Описание</label> 
                </div> 
                <button className="btn btn-primary w-100 py-2" type="submit">Создать</button> 
                <p className="mt-5 mb-3 text-body-secondary">© 2026</p> 
            </form>
        </>
    );
}

export default CreateProject;