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
            <h1>Создание проекта</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Название</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Описание</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">Создать</button>
            </form>
        </>
    );
}

export default CreateProject;