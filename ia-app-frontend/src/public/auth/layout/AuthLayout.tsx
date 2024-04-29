import { FC } from "react"

interface IAuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout:FC<IAuthLayoutProps> = (props) => {

  return (
    <div className="min-h-screen bg-ia-background flex justify-center items-center bg-contain bg-center"  >
        { props.children }
    </div>
  )
}

export default AuthLayout