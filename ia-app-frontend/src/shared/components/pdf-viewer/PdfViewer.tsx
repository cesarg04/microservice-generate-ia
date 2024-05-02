import { FC, useEffect, useMemo } from "react";
import { Viewer, Worker, SpecialZoomLevel, RenderViewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Status } from "@/shared/models/services/resources/responses/get-list-respurces.response";
interface IDocumentProps {
    url: string
    status: Status
}

const PdfViiewer: FC<IDocumentProps> = (props) => {

    const isUrl = useMemo(() => {
        const urlRegExp: RegExp = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegExp.test(props.url);
    }, [props.url])

    if (!isUrl && props.status === Status.Pending) {
        return <IsPending />
    }
    if (!isUrl) return (
        <IsError />
    )

    useEffect(() => {
      
        console.log(props);
      
    }, [props])
    

    return (
        <div className="w-full h-full " >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" >
                <Viewer
                    defaultScale={SpecialZoomLevel.ActualSize}
                    fileUrl={props.url}

                />
            </Worker>
        </div>
    )
}

export default PdfViiewer;

const IsPending = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Documento pendiente</h2>
                <p className="text-gray-700 mb-4">Espere a que el sistema procese el documento...</p>
                <div className="flex justify-center">
                    <svg className="animate-spin h-8 w-8 text-gray-900 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"></path>
                    </svg>
                    {/* El SVG anterior es un spinner de carga, puedes reemplazarlo con cualquier otro indicador de carga según tus preferencias */}
                </div>
            </div>
        </div>
    )
}

const IsError = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Error al cargar el PDF</h2>
                <p className="text-gray-700 mb-4">Lo sentimos, no se pudo cargar el PDF o está pendiente de carga. Por favor, inténtalo nuevamente más tarde.</p>
                <img src="error_image.png" alt="Error Image" className="mx-auto mb-4" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Intentar de nuevo</button>
            </div>
        </div>
    )
}