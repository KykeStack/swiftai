import { Component } from 'solid-js'
import { setCurrentExpandedVideo, setShowModal } from '../global/values'
import './styles/main.css'

const VideoRealTime: Component<{}> = (props) => {
  let videoPlayer : HTMLVideoElement | undefined
  return (
    <div
      onClick={() => { setShowModal(true); setCurrentExpandedVideo('https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/output.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL291dHB1dC5tcDQiLCJpYXQiOjE3MDA5MTY0MTYsImV4cCI6MTcxMzg3NjQxNn0.Ao6rstHzI-ArE9s84RGBgl6wWnV5S4o10Fo0SRIucqI&t=2023-11-25T12%3A46%3A57.601Z') }}
      class='ml-10 mt-10 w-full h-50 flex flex-col bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'
    >
      <div class='relative p-4 md:p-5 m-2 flex flex-col gap-2'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Anteprima
        </h3>
        <div class='absolute top-16 left-12 p-2 z-[99999]'>
          <div class='relative flex gap-2 items-center'>
            <h1 class='text-gray-400'>Live</h1>
            <span class='w-3.5 h-3.5 bg-red-400 border-2 dark:border-gray-800 rounded-full' />
          </div>
        </div>
        <video
          ref={videoPlayer}
          class='
          w-full
          max-w-full
          border
          rounded-3xl
        border-gray-200
          dark:border-gray-700
          max-h-[40rem] cursor-pointer hover:border-wite hover:border-[3px]'
          controls
          autoplay loop muted
        >
          <source
            src='https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/output.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL291dHB1dC5tcDQiLCJpYXQiOjE3MDA5MTY0MTYsImV4cCI6MTcxMzg3NjQxNn0.Ao6rstHzI-ArE9s84RGBgl6wWnV5S4o10Fo0SRIucqI&t=2023-11-25T12%3A46%3A57.601Z'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoRealTime
