import { SuspenseComponent } from "@/shared/components/error-boundary/public-error-boundary"
import Typography from "@/shared/components/typographi/Typograpy"
import { PATH_ROUTES_RESOURCES } from "@/shared/constants/path/private/resources-module.path"
import { resourcesServices } from "@/shared/models/services/resources/resources.service"
import { useNavigate } from "react-router-dom"

const MenuOptions = () => {
    const navigate = useNavigate()
    const { getListResources } = resourcesServices()


    if (getListResources.isLoading) {
        return <SuspenseComponent />
    }

    const onCLickResource = (id: string) => {
        navigate(PATH_ROUTES_RESOURCES.RESOURCES_ID(id))
    }

    return (
        <div className="w-2/12 min-w[200px] h-full bg-slate-600 " >
            <div className="p-5 cursor-pointer" 
                onClick={() => {
                    navigate('/')
                }}
            >
                <Typography
                    align="center"
                    color="text-white"
                    size="3xl"
                    family="main"
                    weight="700"
                >
                    Generador PDF IA
                </Typography>
            </div>
            <div className="w-full h-4/6 overflow-x-hidden overflow-y-scroll flex flex-col gap-1 px-3 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-slate-600">
                {
                    getListResources.data?.data.map(item => (
                        <div
                            className={`h-30 cursor-pointer py-2 hover:bg-slate-800 px-1 rounded-md`}
                            onClick={() => onCLickResource(item.id)}
                            key={item.id}
                        >
                            <Typography
                                truncate
                                color="text-white"
                                family="main"
                            >
                                {item.title}
                            </Typography>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MenuOptions;
