import TextField from "@/shared/components/textfield/Textfield"
import { resourcesServices } from "@/shared/models/services/resources/resources.service"
import { Form, Formik, FormikConfig } from "formik"

const FieldText = () => {

    const { createResource } = resourcesServices()

    const setup: FormikConfig<any> = {
        initialValues: {
            q: ''
        },
        onSubmit: async (values) => {
            createResource.mutateAsync(values.q)
        }
    }


    return (
        <Formik  {...setup}>
            {(FormikProps) => {
                return (
                    <div className="w-full h-5 absolute py-30 bottom-20" >
                        <Form className="px-10">
                            <TextField fullWidth name="q" size="lg" color="secondary" className="bg-slate-300" />
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default FieldText;