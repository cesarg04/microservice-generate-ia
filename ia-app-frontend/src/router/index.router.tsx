import { PrivateModules } from "@/private";
import PublicModules from "@/public/auth";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useCallback, useEffect, useState } from "react";

import { authService } from "@/shared/models/services/auth/auth.service";
import useAuthStore from "@/store/authStore";
import { SuspenseComponent } from "@/shared/components/error-boundary/public-error-boundary";
import { PATH_ROUTES_AUTH } from "@/shared/constants/path/public/auth.module.path";


const MainRouter = () => {

  const { getCurrentUserMutation } = authService()
  const { login, isAuthenticated } = useAuthStore();
  const [sessionValidator, setSessionValidator] = useState({
    autenticated: false,
    isLoading: false
  })
  const navigate = useNavigate()


  const getCurrent = useCallback(
    async () => {
      setSessionValidator({
        ...sessionValidator,
        isLoading: true
      })
      await getCurrentUserMutation.mutateAsync()
        .then(({ data }) => {
          login(data.user, data.token)
          setSessionValidator({
            ...sessionValidator,
            autenticated: true
          })
        })
        .catch(err => {
          navigate(PATH_ROUTES_AUTH.LOGIN)
        })
        .finally(() => {
          setSessionValidator({
            ...sessionValidator,
            isLoading: false
          })
        })
    },
    [],
  )

  useEffect(() => {
    getCurrent()
  }, [])

  
  return (
    <Routes>
      {
        sessionValidator.isLoading === false && (
          <>
            {
              isAuthenticated === false ? (
                <Route path="/*" element={<PublicModules />} />
              )
                : (
                  <Route path="/*" element={<PrivateModules />} />
                )
            }
          </>
        )
      }
      {
        sessionValidator.isLoading && (<Route path="/*" element={<SuspenseComponent />} />)
      }
      {
        sessionValidator.isLoading && (<Route path="/" element={<SuspenseComponent />} />)
      }
    </Routes>
  )
}

export default MainRouter;