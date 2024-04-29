import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Introduce un correo electrónico válido').required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .required('La contraseña es obligatoria')
    ,
});

export default validationSchema;
