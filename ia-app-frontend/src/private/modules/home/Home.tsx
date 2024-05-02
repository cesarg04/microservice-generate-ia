import { useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SuspenseComponent } from '@/shared/components/error-boundary/public-error-boundary';
import { useResourcesContext } from '@/context/resources.context';

const HomePage = () => {

    const navigate = useNavigate()
    const { mutation } = useResourcesContext()

    useEffect(() => {

        // navigate(PATH_ROUTES_AUTH.LOGIN)

    }, [])

    const resourceData = useMemo(() => {
        return mutation?.data?.data
    }, [mutation?.data?.data])

    if (mutation?.isLoading) {
        return (
            <SuspenseComponent />
        )
    }

    return (
        <div className='h-full'>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="max-w-md bg-white p-8 rounded shadow-md text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Escriba lo que desea imprimir</h2>
                    <p className="text-gray-700 mb-4">El contenido será impreso en un PDF</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 animate-bounce mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 001.414-1.414l-7-7A1 1 0 0010 3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default HomePage;