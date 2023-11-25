import { Component } from 'solid-js'
import { setCurrentExpandedVideo, setShowModal } from '../global/values'

const VideoPreviewBox: Component<{}> = (props) => {
  return (
    <div class='ml-10 mt-[10.6rem] w-[95%] h-fit flex flex-row bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 md:p-5 m-2 flex flex-col gap-2'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Camere
        </h3>
        <div class='flex flex-row gap-4 bg-transparent'>
          <div class='flex flex-col gap-4 w-[60%]'>

            <video
              onClick={() => { setShowModal(true) }}
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
                src='https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/master-generic-master-707%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hc3Rlci1nZW5lcmljLW1hc3Rlci03MDcgKDEpLm1wNCIsImlhdCI6MTcwMDg3NzA0NiwiZXhwIjoxNzEzODM3MDQ2fQ.kEEprA3TEP0WRn0UPdmKRA0Vyn9_mEjnsfJHv1Q7ftk&t=2023-11-25T01%3A50%3A47.128Z'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>

            <video
              onClick={() => { setCurrentExpandedVideo('https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/master-generic-master-707%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hc3Rlci1nZW5lcmljLW1hc3Rlci03MDcgKDEpLm1wNCIsImlhdCI6MTcwMDg3NzA0NiwiZXhwIjoxNzEzODM3MDQ2fQ.kEEprA3TEP0WRn0UPdmKRA0Vyn9_mEjnsfJHv1Q7ftk&t=2023-11-25T01%3A50%3A47.128Z'); setShowModal(true) }}
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
                onClick={() => { setCurrentExpandedVideo('https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/master-generic-master-707%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hc3Rlci1nZW5lcmljLW1hc3Rlci03MDcgKDEpLm1wNCIsImlhdCI6MTcwMDg3NzA0NiwiZXhwIjoxNzEzODM3MDQ2fQ.kEEprA3TEP0WRn0UPdmKRA0Vyn9_mEjnsfJHv1Q7ftk&t=2023-11-25T01%3A50%3A47.128Z'); setShowModal(true) }}
                src='https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/boar-original.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2JvYXItb3JpZ2luYWwubXA0IiwiaWF0IjoxNzAwOTE4MjQyLCJleHAiOjE3MTM4NzgyNDJ9.xnrqDapxTmzKLIehEPsq3tfcDbmClC0FDMCtGFrEFKI&t=2023-11-25T13%3A17%3A22.671Z'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class='flex w-[40%] bg-white border shadow-sm rounded-3xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
            <video
              onClick={() => { setCurrentExpandedVideo('https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/master-generic-master-707%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hc3Rlci1nZW5lcmljLW1hc3Rlci03MDcgKDEpLm1wNCIsImlhdCI6MTcwMDg3NzA0NiwiZXhwIjoxNzEzODM3MDQ2fQ.kEEprA3TEP0WRn0UPdmKRA0Vyn9_mEjnsfJHv1Q7ftk&t=2023-11-25T01%3A50%3A47.128Z'); setShowModal(true) }}
              class='
                w-full
                max-w-full
                dark:border-gray-700
                rounded-3xl
                max-h-full cursor-pointer hover:border-wite hover:border-[3px]'
              controls
              autoplay loop muted
            >
              <source
                src='https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/fox.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZveC5tcDQiLCJpYXQiOjE3MDA5MTgxNDcsImV4cCI6MTcxMzg3ODE0N30.xfokMGg3FLO-mWn5u-dFtUQHaPSDfbDRh-aPXESQe8w&t=2023-11-25T13%3A15%3A48.212Z'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPreviewBox
