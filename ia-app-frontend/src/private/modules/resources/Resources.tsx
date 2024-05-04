import { SuspenseComponent } from "@/shared/components/error-boundary/public-error-boundary"
import OptionsButtons from "@/shared/components/options-buttons/OptionsButtons"
import PdfViewer from "@/shared/components/pdf-viewer/PdfViewer"
import { resourcesServices } from "@/shared/models/services/resources/resources.service"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { io } from "socket.io-client"




const Resources = () => {
  const { id } = useParams<{ id: string }>()
  const { getResourcesById } = resourcesServices({ id })

  useEffect(() => {
    getResourcesById.refetch()
    return () => {
      getResourcesById.remove()
    }
  }, [id])


  if (!getResourcesById.data && getResourcesById.isLoading && getResourcesById.isRefetching) {
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
