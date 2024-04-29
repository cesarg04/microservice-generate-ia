import React, { lazy, useEffect } from 'react'
import PublicErrorBoundary from '../../shared/components/error-boundary/public-error-boundary'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { PATH_ROUTER_AUTH, PATH_ROUTES_AUTH } from '../../shared/constants/path/public/auth.module.path'
import useAuthStore from '@/store/authStore'

const RegisterPage = lazy(() => import("@public/auth/modules/register/Register"))
const LoginPage = lazy(() => import("@public/auth/modules/login/Login"))

const PublicModules = () => {
    const navigate = useNavigate()
    const { isAuthenticated } = useAuthStore()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])
    
    return (
        <PublicErrorBoundary>
            <Routes>
                <Route path={PATH_ROUTER_AUTH.REGISTER} element={<RegisterPage/>} />
                <Route path={PATH_ROUTER_AUTH.LOGIN} element={<LoginPage/>} />
            </Routes>
        </PublicErrorBoundary>
    )
}

export default PublicModules