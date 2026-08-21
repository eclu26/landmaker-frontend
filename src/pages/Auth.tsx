import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Auth as AuthRq } from "../functions/Auth";

function Auth() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        await AuthRq(email, password);

        navigate("/");
    };

    return (
        <>
            <h1>Авторизация</h1>

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

                <button type="submit">Войти</button>
            </form>
        </>
    );
}

export default Auth;