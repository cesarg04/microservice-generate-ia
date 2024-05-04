import { api } from "@/shared/api/base.api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { IGetListResponse } from "./responses/get-list-respurces.response"
import { ICreateResourceResponse } from "./responses/create-resource.response"


interface resourcesOptions {
    id?: string 
}


export const resourcesServices = (options?: resourcesOptions) => {

    const getListResources = useQuery(
        {
            queryKey: ['list-resources'],
            queryFn: () => api.get<IGetListResponse[]>('/resources')
        },
    )

    const getResourcesById = useQuery({
        queryKey: ['resources-id', options?.id],
        queryFn: () => api.get<IGetListResponse>(`/resources/${ options?.id }`),
        enabled: options?.id !== undefined && options.id?.length > 0,
        refetchInterval: 5000
    }, )

    const createResource = useMutation({
        mutationFn: (q: string) => {
            return api.post<ICreateResourceResponse>('/resources', { title: q })
        },
        mutationKey: ['create-resources'],
    })

    return {
        getListResources,
        getResourcesById,
        createResource
    }
}