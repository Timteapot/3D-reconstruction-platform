import {post} from '../utils/http/request'

interface loginData {
    username: string;
    password: string;
}

export const login = (data: loginData) => {
    return post('/api/login', data)
}