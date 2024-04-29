import { generateEnumsFromKeys } from "@/shared/helpers/generate-enums-form.helper";

export const loginUserInitialValues: I_Login_Fields = {
    email: '',
    password: '',
}



export interface I_Login_Fields {
    email: string;
    password: string;

}

type ModelKeys<T> = Record<keyof T, string>;

const getKeyEnums = <T>(obj: T): ModelKeys<T> => {
    return generateEnumsFromKeys(obj as any);
};

export const LOGIN_FORM = getKeyEnums(loginUserInitialValues)
