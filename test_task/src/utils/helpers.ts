import {LOGIN, CHECK_AUTH} from "./endpoints.ts";

export const login = async (username: string, password: string) => {
    return await fetch(LOGIN, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });
}

export const checkAuth = async (token: string) => {
    return await fetch(CHECK_AUTH, {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    });
};