import React from 'react'
import YouTube from 'react-youtube'
import { Close } from '@mui/icons-material'

const TrailerModal = ({setOpen, videoArr}) => {
  console.log('vi:', videoArr)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='modal'>
      <div>
        <Close onClick={handleClose} />
      </div>
      <YouTube
        title="유튜브"
        videoId={videoArr[0].key}
        opts={{
          width: '100%',
          height: '550px',
        }}
      />
    </div>
  )
}

export default TrailerModal