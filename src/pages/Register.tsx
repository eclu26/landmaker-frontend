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
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Регистрация</h1> 
                <div className="form-floating"> 
                    <input type="email" className="form-control" id="floatingInput" placeholder="example@mail.com" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required /> 
                    <label htmlFor="floatingInput">Почта</label> 
                </div> 
                <div className="form-floating"> 
                    <input type="password" className="form-control" id="floatingPassword" placeholder="passw0rd" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required /> 
                    <label htmlFor="floatingPassword">Пароль</label> 
                </div> 
                <button className="btn btn-primary w-100 py-2" type="submit">Зарегистрироваться</button> 
                <p className="mt-5 mb-3 text-body-secondary">© 2026</p> 
            </form>
        </>
    );
}

export default Register;