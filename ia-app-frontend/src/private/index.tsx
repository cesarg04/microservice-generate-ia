import PublicErrorBoundary from "@/shared/components/error-boundary/public-error-boundary"
import useAuthStore from "@/store/authStore"
import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import { PATH_ROUTER_RESOURCES } from "@/shared/constants/path/private/resources-module.path"
import Resources from "./modules/resources/Resources"

const HomeComponent = lazy(() => import("@private/modules/home/Home"))

export const PrivateModules = () => {

    return (
        <MainLayout>
            <PublicErrorBoundary>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path={PATH_ROUTER_RESOURCES.RESOURCES_ID} element={<Resources />} />
                </Routes>
            </PublicErrorBoundary>
        </MainLayout>
    )
}
