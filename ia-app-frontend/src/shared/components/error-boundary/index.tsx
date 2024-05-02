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
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uppss... Ha ocurrido un inconveniente</h2>
        <p className="text-gray-700 mb-4">Recarga la página e intenta nuevamente.</p>
        <button onClick={resetErrorBoundary} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Recargar</button>
      </div>
    </div>
    );
  }
  