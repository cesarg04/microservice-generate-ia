import { FC, useMemo } from "react"
import { fontsStyles, sizesStyles, weightStyles } from "./util/typography.styles";


interface ITypographyProps {
    children?: any;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    color?: string;
    family?: 'main' | 'roleway' | 'Arimo' | 'Inter';
    weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
    align?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end'
    truncate?: boolean
}

const Typography:FC<ITypographyProps> = (props) => {

    const styles = useMemo(() => {
        let stlArr = []
        if (props.size) stlArr.push(sizesStyles[props.size])
        if (props.family) stlArr.push(fontsStyles[props.family])
        if (props.align) stlArr.push(`text-${props.align}`) 
        if (props.truncate) stlArr.push('truncate')
        props.color ? stlArr.push(props.color) :  stlArr.push('text-primary-800')
        if (props.weight)  stlArr.push(weightStyles[props.weight])
        return stlArr.join(' ')

    }, [props])



    return (
        <h5
            className={styles}
        >
            { props.children }
        </h5>
    )
}

export default Typography;

