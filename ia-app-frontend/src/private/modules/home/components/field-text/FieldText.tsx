import { useResourcesContext } from "@/context/resources.context"
import BtnCustom from "@/shared/components/button/BtnCustom"
import TextField from "@/shared/components/textfield/Textfield"
import { PATH_ROUTES_RESOURCES } from "@/shared/constants/path/private/resources-module.path"
import { resourcesServices } from "@/shared/models/services/resources/resources.service"
import { Form, Formik, FormikConfig } from "formik"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const FieldText = () => {
    const navigate = useNavigate()
    const { mutation } = useResourcesContext()

    const setup: FormikConfig<any> = {
        initialValues: {
            q: ''
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                formikHelpers.resetForm()
                const { data } = await mutation?.mutateAsync(values.q)!
                if (data.resource.id) {
                    toast.success(data.msg)
                    navigate(PATH_ROUTES_RESOURCES.RESOURCES_ID(data.resource.id))
                }
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <Formik  {...setup}>
            {(FormikProps) => {
                return (
                    <div className="w-full h-5 absolute py-30 bottom-20" >
                        <Form className="px-10">
                            <TextField
                                fullWidth
                                name="q"
                                size="lg"
                                color="secondary"
                                className="bg-slate-300"
                                endContent={
                                    <BtnCustom
                                        color="primary"
                                        type="submit"
                                    >
                                        Enviar
                                    </BtnCustom>
                                }
                            />
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default FieldText;