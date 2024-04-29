import { FC, Suspense, useEffect } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'



interface IErrorBoundaryComponent {
    suspendComponent: JSX.Element;
    children: any
}

const ErrorBoundaryComponent: FC<IErrorBoundaryComponent> = (props) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} >
            <Suspense fallback={props.suspendComponent} >{ props.children }</Suspense>
        </ErrorBoundary>
    )
}

export default ErrorBoundaryComponent;


function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    useEffect(() => {
    }, [error.message]);
  
    return (
      <div role="alert">
        <p>Uppss.. Ha ocurrido un inconveniente. </p>
        <span>Recarga la pagina...</span>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }
  