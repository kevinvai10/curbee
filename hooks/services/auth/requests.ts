import { POST, client } from "../../../services";
import { LoginFields } from "./types";

/** Ideally we would have a constant files */
const LOGIN_URL = '/auth/login';

export const login = async (loginRequest: LoginFields) =>
client(LOGIN_URL, {
    method: POST,
    body: JSON.stringify({ username: loginRequest.email, password: loginRequest.password }),
});