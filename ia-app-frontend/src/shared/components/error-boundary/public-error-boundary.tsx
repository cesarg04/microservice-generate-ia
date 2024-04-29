import { FC } from "react";
import ErrorBoundaryComponent from ".";
import { CircularProgress } from "@nextui-org/react";

interface IPublicErrorBoundaryProps {
    children: JSX.Element | JSX.Element[]
}

const PublicErrorBoundary:FC<IPublicErrorBoundaryProps> = (props) => {
    return (
        <ErrorBoundaryComponent
            suspendComponent={ <SuspenseComponent/>}
        >
            { props.children }
        </ErrorBoundaryComponent>
    )
}

export default PublicErrorBoundary;

export const SuspenseComponent = () => {

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <CircularProgress size="lg" label="Loading..." />
        </div>
    )
}