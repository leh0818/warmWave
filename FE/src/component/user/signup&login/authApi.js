import { useEffect } from 'react';
import useToast from '../../hooks/useToast';
import axios from 'axios';

export const API_SERVER_HOST = 'http://localhost:8080';
const host = API_SERVER_HOST;

const instance = axios.create({
    baseURL: host,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

const useAuthAPI = () => {
    const { showToast } = useToast();

    const Login = async (auth) => {
        try {
            const response = await instance.post(`${host}/api/users/login`, auth);
            return response;
        } catch (error) {
            showToast('에러가 발생했습니다');
        }
    };

    const SignUp = async (auth) => {
        try {
            const response = await instance.post(`${host}/api/users/register/individual`, auth);
            return response;
        } catch (error) {
            showToast('에러가 발생했습니다');
        }
    };

    const emailValidCheck = async (email) => {
        try {
            const response = await instance.get(`${host}/api/users/register/checkEmail/?email=${email}`);
            return response;
        } catch (error) {
            showToast('에러가 발생했습니다');
        }
    };

    return {
        Login,
        SignUp,
        emailValidCheck,
    };
};

export default useAuthAPI;