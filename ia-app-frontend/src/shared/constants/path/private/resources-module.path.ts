
export const PATH_ROUTER_RESOURCES = {
    RESOURCES_ID : 'resources/:id'
}


const { RESOURCES_ID } = PATH_ROUTER_RESOURCES;

export const PATH_ROUTES_RESOURCES = {
    RESOURCES_ID: (ID: string) => `${RESOURCES_ID.replace(':id', ID.toString())}`
}
