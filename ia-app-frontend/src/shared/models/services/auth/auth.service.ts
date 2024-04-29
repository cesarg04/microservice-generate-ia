import { api } from "@/shared/api/base.api"
import { useMutation } from "@tanstack/react-query"
import { IRegisterResponse } from "./responses/register.response"
import { PATH_ROUTES_AUTH } from "@/shared/constants/path/public/auth.module.path"
import { IRegisterValues } from "./values/register.values"
import { ILoginValues } from "./values/login.values"

export const authService = () => {

    const registerMutation = useMutation({
        mutationFn: (values: IRegisterValues) => {
            return api.post<IRegisterResponse>(PATH_ROUTES_AUTH.REGISTER, values.body)
        },
        mutationKey: ['registeer-mutation'] 
    })

    const loginMutation = useMutation({
        mutationFn: (values: ILoginValues) => {
            return api.post<IRegisterResponse>(PATH_ROUTES_AUTH.LOGIN, values.body)
        },
        mutationKey: ['login-mutation']
    })

    const getCurrentUserMutation = useMutation({
        mutationFn: () => {
            return api.get<IRegisterResponse>('/auth/user')
        },
        mutationKey: ['get-current-user']
    })

    return  {
        serviceMutation: registerMutation,
        loginMutation,
        getCurrentUserMutation
    }

}

