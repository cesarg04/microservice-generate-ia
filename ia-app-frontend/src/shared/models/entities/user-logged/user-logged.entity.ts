import { User } from "../user/user.entity";

export interface IUserLoggedEntity {
    token: string;
    userData?: User
}


