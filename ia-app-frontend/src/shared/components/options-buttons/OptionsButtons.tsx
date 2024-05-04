import DownloadIcon from '@assets/icons/download.svg'
import ExportIcon from '@assets/icons/export.svg'
import { Button, Tooltip } from '@nextui-org/react'
import BtnCustom from '../button/BtnCustom'
import { FC } from 'react';
import download from 'downloadjs'

interface IOptionsButtonsProps {
    url: string;
}

const OptionsButtons:FC<IOptionsButtonsProps> = ({ url }) => {
    const onOpen = () => {
        window.open(url, '_blank')
    }

    const onDownload = () => {
        download(url)
    }

    return (
        <div className="absolute top-10 right-10 p-4 text-white z-10 flex gap-4">
            <BtnCustom 
                isIconOnly 
                size='lg'
                onClick={onDownload}
                >
                <DownloadIcon />
            </BtnCustom>

            <BtnCustom 
                isIconOnly 
                size='lg'
                onClick={onOpen}
                >
                <ExportIcon />
            </BtnCustom>
        </div>
    )
}

export default OptionsButtons