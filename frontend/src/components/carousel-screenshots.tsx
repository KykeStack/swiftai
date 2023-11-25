import { Component } from 'solid-js'
import './styles/main.css'

const CarouselScreenshots: Component<{}> = (props) => {
  return (
    <div class='ml-10 mt-10 w-full h-50 flex flex-col bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 m-2 flex flex-col gap-2'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Ricerca Elementi
        </h3>
        {/* <!-- Slider --> */}
        <div data-hs-carousel='{ "loadingClasses": "opacity-0" }' class='relative'>
          <div class='hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg'>
            <div class='hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0'>
              <div class='hs-carousel-slide'>
                <div class='flex justify-center h-full bg-gray-100 p-6'>
                  <span class='self-center text-4xl transition duration-700'>First slide</span>
                </div>
              </div>
              <div class='hs-carousel-slide'>
                <div class='flex justify-center h-full bg-gray-200 p-6'>
                  <span class='self-center text-4xl transition duration-700'>Second slide</span>
                </div>
              </div>
              <div class='hs-carousel-slide'>
                <div class='flex justify-center h-full bg-gray-300 p-6'>
                  <span class='self-center text-4xl transition duration-700'>Third slide</span>
                </div>
              </div>
            </div>
          </div>

          <button type='button' class='hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]'>
            <span class='text-2xl' aria-hidden='true'>
              <svg class='w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' />
              </svg>
            </span>
            <span class='sr-only'>Previous</span>
          </button>
          <button type='button' class='hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]'>
            <span class='sr-only'>Next</span>
            <span class='text-2xl' aria-hidden='true'>
              <svg class='w-4 h-4' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </span>
          </button>
        </div>
        {/* <!-- End Slider --> */}
      </div>
    </div>
  )
}

export default CarouselScreenshots
