import BtnCustom from '@/shared/components/button/BtnCustom';
import TextField from '@/shared/components/textfield/Textfield';
import Typography from '@/shared/components/typographi/Typograpy';
import { Form, Formik, FormikConfig } from 'formik';
import { I_Register_Fields, REGISTER_FORM, registerUserInitialValues } from './util/form.util';
import validationSchema from './util/validation';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTES_AUTH } from '@/shared/constants/path/public/auth.module.path';
import { authService } from '@/shared/models/services/auth/auth.service';
import AuthLayout from '../../layout/AuthLayout';
import { useEffect } from 'react';

const Register = () => {
    const navigate = useNavigate()
    const { serviceMutation } = authService()

    const onSubmit = async(values: I_Register_Fields) => {
        console.log('h;kdnkenk ');
        serviceMutation.mutate({
            body: {...values}
        })
    }

    const setup: FormikConfig<I_Register_Fields> = {
        initialValues: registerUserInitialValues,
        onSubmit: () => {
            console.log('ghwdjkdfkdbf');
        },
        validationSchema: validationSchema
    }

    const onRedirectLogin = () => {
        navigate(PATH_ROUTES_AUTH.LOGIN)
    }


    return (
        <Formik {...setup} >
            {(formikProps) => {

                const onSubmit = () => {
                    formikProps.submitForm()
                }
                
                return (
                    <Form>

                        <AuthLayout >
                            <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
                                <Typography
                                    size='4xl'
                                    family='Arimo'
                                    weight='600'
                                    color='text-primary'
                                    align='center'
                                >Registro</Typography>

                                <div className="mb-4">
                                    <TextField
                                        name={REGISTER_FORM.name}
                                        label='Nombre completo'
                                    />
                                </div>
                                <div className="mb-4">
                                    <TextField
                                        name={REGISTER_FORM.email}
                                        type='email'
                                        label='Correo electronico'
                                    />
                                </div>
                                <div className="mb-4">
                                    <TextField
                                        name={REGISTER_FORM.password}
                                        type='password'
                                        label='Contraseña'
                                    />
                                </div>
                                <div className="text-center">
                                    <BtnCustom
                                        color='primary'
                                        type='submit'
                                        isLoading={serviceMutation.isPending}
                                        disabled={serviceMutation.isPending}
                                    >
                                        Registrarse
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
                                    ¿Tienes una cuenta? Inicia sesion
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

export default Register;