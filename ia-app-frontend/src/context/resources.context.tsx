


import { resourcesServices } from '@/shared/models/services/resources/resources.service';
import { ICreateResourceResponse } from '@/shared/models/services/resources/responses/create-resource.response';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import React, { createContext, FC, useContext } from 'react'

interface ResourcesContextType {
    mutation: UseMutationResult<AxiosResponse<ICreateResourceResponse, any>, unknown, string, unknown> | null;
}

const ResourcesContext = createContext<ResourcesContextType>({
    mutation: null
});

export const ResourcesContextProvider: FC<any> = ({ children }) => {
    const { createResource } = resourcesServices()
    return (
        <ResourcesContext.Provider
            value={{
                mutation: createResource
            }}>
            {children}
        </ResourcesContext.Provider>
    )

}

export const useResourcesContext = (): ResourcesContextType => useContext(ResourcesContext);
