import { useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { resourcesServices } from '@/shared/models/services/resources/resources.service';
import { SuspenseComponent } from '@/shared/components/error-boundary/public-error-boundary';
import Typography from '@/shared/components/typographi/Typograpy';
import { Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react';

const HomePage = () => {

    const navigate = useNavigate()
    const { createResource } = resourcesServices()

    useEffect(() => {

        // navigate(PATH_ROUTES_AUTH.LOGIN)

    }, [])

    const resourceData = useMemo(() => {
        return createResource.data?.data
    }, [createResource.data?.data])

    if (createResource.isPending) {
        return (
            <SuspenseComponent />
        )
    }

    useEffect(() => {
      
        console.log(createResource.data);
    }, [createResource])
    


    return (
        <div className='h-full'>
            {
                !createResource.data?.data && (
                    <div className='pt-20' >
                        <Typography
                            align='center'
                            color='text-black'
                            family='main'
                            weight='700'
                            size='6xl'
                        >
                            Escriba lo que desea imprimir
                        </Typography>
                        <Typography
                            align='center'
                            color='text-black'
                            family='main'
                            size='lg'
                        >
                            Lo que escriba sera imprimido en PDF
                        </Typography>
                    </div>
                )
            }
            {
                createResource.data?.data && (
                    <div className='w-full h-hull flex justify-center items-center' >
                        <Card className="max-w-[400px] min-w-[300px]">
                            <CardHeader className="flex gap-3">
                                <Image
                                    alt="nextui logo"
                                    height={40}
                                    radius="sm"
                                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                    width={40}
                                />
                                <div className="flex flex-col">
                                    <p className="text-md">{ }</p>
                                    <p className="text-small text-default-500">{resourceData?.msg}</p>
                                    <Typography
                                        family='main'
                                        color='text-default-500'
                                    >
                                        {resourceData?.msg ?? 'jskdhjsk'}
                                    </Typography>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Typography>
                                    {resourceData?.resource.title ?? 'dfhdk'}
                                </Typography>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link
                                    to={`/resources/${resourceData?.resource.id}`}
                                >
                                    Ver documento
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                )
            }

        </div>
    )
}

export default HomePage;