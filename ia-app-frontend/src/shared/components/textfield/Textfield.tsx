import { Input, InputProps } from "@nextui-org/react";
import { useField } from "formik";
import { FC, useEffect } from "react";


interface ITextFieldProps extends InputProps {
    name: string;
    label?: string;
    placeholder?: string;
    size?: "lg" | "sm" | "md";
    noUseFormik?: boolean;
    className?: string
}

const TextField:FC<ITextFieldProps> = (props) => {

  const noUseFormikProps: InputProps = {
    id: `${ props.name }-id`,
        label: props.label,
        placeholder: props.placeholder,
        size: props.size,
        fullWidth: true,
        labelPlacement: 'outside',
        radius: 'lg',
        className: 'my-2 border-neutral-600',
        variant: 'bordered',
        color: 'primary',
        isClearable: true,
  }

  if (props.noUseFormik) {
    return <Input { ...noUseFormikProps } />
  }

    const [ field, meta, helpers ] = useField(props.name)

    const handleChange = (text: string) => {
        helpers.setValue(text)
    }

    useEffect(() => {
        // console.log({ field: field.name, touched: meta.touched, error: meta.error });
    }, [])

    const setup: InputProps = {
        ...props,
        id: `${ props.name }-id`,
        label: props.label,
        placeholder: props.placeholder,
        onValueChange: handleChange,
        isInvalid: meta.error && meta.touched === true ? true : false,
        errorMessage: meta.touched === true ? meta.error : '',
        size: props.size,
        fullWidth: true,
        labelPlacement: 'outside',
        radius: 'lg',
        className: props.className + ' ' + 'my-2 border-neutral-600 font-medium',
        variant: 'bordered',
        color: 'primary',
        isClearable: true,
        onClear: () => {
            helpers.setValue('')
        },
        value: field.value,
    }
    return (
        <Input           
         { ...setup }
        />
    )
}

export default TextField