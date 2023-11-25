import { Component } from 'solid-js'
import { setShowModal, showModal } from '../global/values'
import './styles/main.css'

const GeneralModal: Component<{}> = (props) => {
  let videoPlayer : HTMLVideoElement | undefined

  return (
    <div classList={{ hidden: !showModal() }}>
      <div id='default-modal' tabindex='-1' aria-hidden='true' class='z-[999999] overflow-y-auto overflow-x-hidden bg-slate-200 opacity-50 fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-screen max-h-full' />
      <div class='absolute z-[9999999] ml-[12%] mt-[12%] w-[80%] h-50 flex flex-col bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
        <button onClick={() => setShowModal(false)} type='button' class='absolute z-[99999999] right-12 top-12  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-hide='default-modal'>
          <svg class='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
          </svg>
          <span class='sr-only'>Close modal</span>
        </button>

        <div class='absolute top-12 left-12 border border-white p-2'>
          <div class='relative flex gap-2 items-center'>
            <h1>Live</h1>
            <span class='w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full' />
          </div>
        </div>

        <div class='p-4 md:p-5 m-2 flex flex-col gap-2'>
          <video
            ref={videoPlayer}
            class='
                w-full
                max-w-full
                border
                rounded-3xl
              border-gray-200
                dark:border-gray-700
                max-h-full'
            controls
            autoplay loop muted
          >
            <source
              src='https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/master-generic-master-707%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hc3Rlci1nZW5lcmljLW1hc3Rlci03MDcgKDEpLm1wNCIsImlhdCI6MTcwMDg3NzA0NiwiZXhwIjoxNzEzODM3MDQ2fQ.kEEprA3TEP0WRn0UPdmKRA0Vyn9_mEjnsfJHv1Q7ftk&t=2023-11-25T01%3A50%3A47.128Z'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default GeneralModal
