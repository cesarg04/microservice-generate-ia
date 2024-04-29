import { generateEnumsFromKeys } from "@/shared/helpers/generate-enums-form.helper";

export const registerUserInitialValues: I_Register_Fields = {
    name: '',
    email: '',
    password: '',
}



export interface I_Register_Fields {
    name: string;
    email: string;
    password: string;

}

type ModelKeys<T> = Record<keyof T, string>;

const getKeyEnums = <T>(obj: T): ModelKeys<T> => {
    return generateEnumsFromKeys(obj as any);
};

export const REGISTER_FORM = getKeyEnums(registerUserInitialValues)
