import { SuspenseComponent } from "@/shared/components/error-boundary/public-error-boundary"
import PdfViewer from "@/shared/components/pdf-viewer/PdfViewer"
import { resourcesServices } from "@/shared/models/services/resources/resources.service"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Resources = () => {

  const { id } = useParams<{ id: string }>()

  const { getResourcesById } = resourcesServices({ id })

  useEffect(() => {
    getResourcesById.refetch()
  }, [id])

  if (!getResourcesById.data && getResourcesById.isLoading) {
    return <SuspenseComponent/>
  }


  return (
    <div className="h-full" >
      <PdfViewer
        url={getResourcesById.data?.data.url ?? ''}
        status={getResourcesById.data?.data.status as any}
      />
    </div>
  )
}

export default Resources;
