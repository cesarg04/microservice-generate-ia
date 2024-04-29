import axios from 'axios';
import Cookies from 'js-cookie';
import ENVIRONMENT_VAR from '../constants/env/env.const';
import useCookieSessionManager from '../hooks/useCookieSessionManager.hook';

const token = JSON.parse( Cookies.get(ENVIRONMENT_VAR.COOKIE_TOKEN) ?? '{}' ).token

export const api = {
    get: <T>(url: string, params?: object, headers?: any) =>
        axios.get<T>(ENVIRONMENT_VAR.API_URL + url, {
            headers: {
                "x-token": token,
            },
            ...params,
        }),
    post: <T>(url: string, data: any, params?: object) =>
    {   
        return axios.post<T>(ENVIRONMENT_VAR.API_URL + url, data, {
            headers: {
                "x-token": token,
            },
            ...params
        })
    },
    patch: <T>(url: string, data: any, params?: object) =>
        axios.patch<T>(ENVIRONMENT_VAR.API_URL + url, data, {
            headers: {
                "x-token": token,
            },
            ...params
        }),
    delete: <T>(url: string) =>
        axios.delete<T>(ENVIRONMENT_VAR.API_URL + url, {
            headers: {
                "x-token": token,
            },
        }),
};
