import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Api from "../functions/Api";
import { Auth as AuthRq } from "../functions/Auth";

function Register() {
    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        await Api.post("/users/register", {
            email: email, 
            password: password 
        });

        await AuthRq(email, password);

        navigate("/");
    };

    return (
        <>
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Почта</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Пароль</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}

export default Register;