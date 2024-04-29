import { FC } from "react"
import MenuOptions from "../modules/home/components/menu-options/MenuOptions"
import FieldText from "../modules/home/components/field-text/FieldText"

interface IMainLayoutProps {
    children: React.ReactNode
}

const MainLayout:FC<IMainLayoutProps> = (props) => {


    return (
        <div className="h-full flex" >
            <MenuOptions/>
            <div className="relative w-full bg-slate-200" >
                { props.children }
                <FieldText/>
            </div>
        </div>
    )
}

export default MainLayout