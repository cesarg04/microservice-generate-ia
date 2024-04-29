import { FC, useMemo } from "react";
import { Viewer, Worker, SpecialZoomLevel, RenderViewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
interface IDocument {
    url: string
}


const PdfViiewer: FC<IDocument> = (props) => {

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