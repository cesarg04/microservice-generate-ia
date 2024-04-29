export type env = "localhost" | "stage" | "prod";

export type T_ENVIRONMENT_VAR = {
    API_URL: string;
    COOKIE_TOKEN: string;
    COOKIE_DOMAIN: string;
    COOKIE_DATA: string;
};

const ENVIRONMENT_VAR: T_ENVIRONMENT_VAR = {
    API_URL: import.meta.env.VITE_HOST_URL as string,
    COOKIE_TOKEN: import.meta.env.VITE_COOKIE_TOKEN as string,
    COOKIE_DOMAIN: import.meta.env.VITE_COOKIE_DOMAIN as string,
    COOKIE_DATA: import.meta.env.VITE_COOKIE_DATA as string
};

export default ENVIRONMENT_VAR;
