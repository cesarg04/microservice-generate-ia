export interface ICreateResourceResponse {
    msg:      string;
    resource: Resource;
}

export interface Resource {
    title:  string;
    user:   User;
    url:    null;
    id:     string;
    status: string;
}

export interface User {
    id:       string;
    name:     string;
    email:    string;
    password: string;
}
