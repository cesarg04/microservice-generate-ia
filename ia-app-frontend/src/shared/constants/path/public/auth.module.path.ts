export const PATH_ROUTER_AUTH = {
    LOGIN: "auth/login",
    REGISTER: 'auth/register'
}

const { LOGIN, REGISTER } = PATH_ROUTER_AUTH;


export const PATH_ROUTES_AUTH = {
    LOGIN: `/${ LOGIN }`,
    REGISTER: `/${ REGISTER }`
}