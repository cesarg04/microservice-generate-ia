import { Button, ButtonProps } from "@nextui-org/react"
import { FC } from "react"
import Typography from "../typographi/Typograpy";

interface IBtnCustomProps extends ButtonProps {
    children?: any;
    type?: 'button' | 'reset' | 'submit';
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" 
    size?: "sm" | "md" | "lg" 
    className?: string;
}

const BtnCustom:FC<IBtnCustomProps> = (props) => {

    const setup: ButtonProps = {
        type: props.type,
        color: props.color ?? 'primary',
        size: props.size ?? 'md',
        fullWidth: true,
        className: `text-md ${ props.className }`,
        ...props
    }

    return (
        <Button {...setup} >
            <Typography
                color="text-white"
                size="lg"
                family="Arimo"
            >
            { props.children }

            </Typography>
        </Button>
    )
}

export default BtnCustom