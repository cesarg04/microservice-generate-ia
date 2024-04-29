import PdfViewer from "@/shared/components/pdf-viewer/PdfViewer"
import { resourcesServices } from "@/shared/models/services/resources/resources.service"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Resources = () => {

    const { id } = useParams<{id: string}>()

    const { getResourcesById } = resourcesServices({ id })

    useEffect(() => {
        getResourcesById.refetch()
    }, [id])
    
  return (
    <div className="h-full" >
        <PdfViewer
            url={getResourcesById.data?.data.url ?? ''}
        />

    </div>
  )
}

export default Resources;