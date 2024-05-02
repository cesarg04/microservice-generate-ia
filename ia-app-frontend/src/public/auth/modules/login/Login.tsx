import BtnCustom from '@/shared/components/button/BtnCustom';
import TextField from '@/shared/components/textfield/Textfield';
import Typography from '@/shared/components/typographi/Typograpy';
import { Form, Formik, FormikConfig } from 'formik';
import { I_Login_Fields, LOGIN_FORM, loginUserInitialValues } from './util/form.util';
import validationSchema from './util/validation';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES_AUTH } from '@/shared/constants/path/public/auth.module.path';
import { authService } from '@/shared/models/services/auth/auth.service';
import useAuthStore from '@/store/authStore';
import useCookieSessionManager from '@/shared/hooks/useCookieSessionManager.hook';
import { useEffect } from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const { loginMutation } = authService()
  const { setSessionTokenUser, setSessionDataUser } = useCookieSessionManager()
  const { login, user, token } = useAuthStore();

  const onSubmit = async(values: I_Login_Fields) => {
    await loginMutation.mutateAsync({
        body: {...values}
    }).then(({ data }) => {
      setSessionTokenUser({ token: data.token })
      setSessionDataUser({ ...data.user })
      login(data.user, data.token)
      navigate('/')
    }).catch((err) => {
      toast.error(err.response.data)
    })
  }

  const setup: FormikConfig<I_Login_Fields> = {
    initialValues: loginUserInitialValues,
    onSubmit: (values, formikFields) => { onSubmit(values) },
    validationSchema: validationSchema
  }

  const onRedirectLogin = () => {
    navigate(PATH_ROUTES_AUTH.REGISTER)
  }

  useEffect(() => {
  
  }, [token, user])
  


  return (
    <Formik {...setup} >
      {(formikProps) => {
        return (
          <Form>

            <AuthLayout >
              <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
                <Typography
                  size='4xl'
                  family='Arimo'
                  weight='600'
                  color='text-primary'
                  align='center'>
                    Iniciar Sesion
                    </Typography>

                <div className="mb-4">
                  <TextField
                    name={LOGIN_FORM.email}
                    type='email'
                    label='Correo electronico'
                  />
                </div>
                <div className="mb-4">
                  <TextField
                    name={LOGIN_FORM.password}
                    type='password'
                    label='Contraseña'
                  />
                </div>
                <div className="text-center">
                  <BtnCustom
                    color='primary'
                    type='submit'
                    isLoading={loginMutation.isLoading}
                    disabled={loginMutation.isLoading}
                  >
                    Iniciar Sesion
                  </BtnCustom>
                </div>

                <div
                  className="mt-5 flex justify-center gap-15 cursor-pointer"
                  onClick={onRedirectLogin}
                >
                  <Typography
                    align='center'
                    color='text-primary'
                  >
                    ¿No tienes una cuenta? Registrate
                  </Typography>
                </div>
              </div>
            </AuthLayout>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Login