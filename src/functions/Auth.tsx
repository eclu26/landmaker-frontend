import Api from "../functions/Api";

export async function Auth(email: string, password: string) {
    await Api.post("/users/auth", {
        email: email,
        password: password
    }).then((response) => {
        localStorage.setItem("jwt", response.data.jwt);
    });
}