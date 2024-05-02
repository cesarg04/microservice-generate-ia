import { FC } from "react"
import MenuOptions from "../modules/home/components/menu-options/MenuOptions"
import FieldText from "../modules/home/components/field-text/FieldText"
import { ResourcesContextProvider } from "@/context/resources.context"

interface IMainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<IMainLayoutProps> = (props) => {


    return (
        <ResourcesContextProvider>
            <div className="h-full flex" >
                <MenuOptions />
                <div className="relative w-full bg-slate-200">
                    {props.children}
                    <FieldText />
                </div>
            </div>
        </ResourcesContextProvider>
    )
}

export default MainLayout