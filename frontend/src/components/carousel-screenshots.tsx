import { Component, createSignal, Index } from 'solid-js'
import './styles/main.css'

const carouselImagesData = [
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/magiale.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL21hZ2lhbGUucG5nIiwiaWF0IjoxNzAwOTAyMjg1LCJleHAiOjE3MTM4NjIyODV9.WO81l3NevYbIkoWzcCW5IAXYjGCPhKWpSX6tyGEoNS8&t=2023-11-25T08%3A51%3A25.481Z', index: 0 },
  { source: 'https://www.comune.segrate.mi.it/img/telecamera.jpeg?__scale=w:762,h:547', index: 1 },
  { source: 'data:image/jpeg;base64,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', index: 2 },
  { source: 'https://www.telecamerevideosorveglianza.org/wp-content/uploads/2018/05/maxresdefault.jpg', index: 3 },
  { source: 'https://www.iltelecomandolab.it/wp-content/uploads/2019/01/telecamere-sorveglianza.jpg', index: 4 },
  { source: 'https://storage.laprovinciadisondrio.it/media/photologue/2013/5/29/photos/cache/pare-riprese-a-sorpresa-le-telecamere-sono-mobili_39b2d9bc-c858-11e2-8580-9c608594999e_v3_large_libera.jpg', index: 5 }
]

const CarouselScreenshots: Component<{}> = (props) => {
  const [carouselIndex, setcarouselIndex] = createSignal(0)
  const [listImages] = createSignal(carouselImagesData)
  return (
    <div class='ml-10 mt-10 w-full h-50 flex flex-col bg-[#F2F2F2] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 m-2 flex flex-col gap-2'>
        <h3 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Ricerca Elementi
        </h3>

        <div id='controls-carousel' class='relative w-full' data-carousel='static'>
          {/* <!-- Carousel wrapper --> */}
          <div class='relative h-56 overflow-hidden rounded-lg md:h-96'>
            <Index each={listImages()}>{(images, i) =>
              <div classList={{ hidden: carouselIndex() !== i }} class='hidden duration-700 ease-in-out' data-carousel-item='active'>
                <img src={images().source} class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='...' />
              </div>}
            </Index>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            onClick={() => {
              if (carouselIndex() <= 0) {
                setcarouselIndex(() => carouselImagesData.length - 1)
                return
              }
              setcarouselIndex(() => carouselIndex() - 1)
            }}
            type='button'
            class='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-prev
          >
            <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <svg class='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 1 1 5l4 4' />
              </svg>
              <span class='sr-only'>Previous</span>
            </span>
          </button>
          <button
            onClick={() => {
              if (carouselIndex() >= carouselImagesData.length - 1) {
                setcarouselIndex(0)
                return
              }
              setcarouselIndex(() => carouselIndex() + 1)
            }}
            type='button'
            class='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-next
          >
            <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <svg class='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4' />
              </svg>
              <span class='sr-only'>Next</span>
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default CarouselScreenshots
