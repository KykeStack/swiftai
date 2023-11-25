import { Component } from 'solid-js'
import { currentExpandedVideo, setShowModal } from '../global/values'
import './styles/main.css'

const VideoRealTime: Component<{}> = (props) => {
  let videoPlayer : HTMLVideoElement | undefined
  return (
    <div
      onClick={() => { setShowModal(true) }}
      class='ml-10 mt-10 w-full h-50 flex flex-col bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'
    >
      <div class='p-4 md:p-5 m-2 flex flex-col gap-2'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Anteprima
        </h3>
        <video
          ref={videoPlayer}
          class='
          w-full
          max-w-full
          border
          rounded-3xl
        border-gray-200
          dark:border-gray-700
          max-h-full cursor-pointer hover:border-wite hover:border-[3px]'
          controls
          autoplay loop muted
        >
          <source
            src={currentExpandedVideo()}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoRealTime
