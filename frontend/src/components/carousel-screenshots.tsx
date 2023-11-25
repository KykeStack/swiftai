import { Component, createSignal, Index } from 'solid-js'
import './styles/main.css'

const carouselImagesData = [
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/frame-fox_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZyYW1lLWZveF8xLmpwZyIsImlhdCI6MTcwMDkxODUzNiwiZXhwIjoxNzEzODc4NTM2fQ.kqJ0vSwuiGCLpdSxJ2rnlPXSS-Eb0SlbdGh6lY7B6P4&t=2023-11-25T13%3A22%3A16.834Z', index: 0 },
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/frame-fox_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZyYW1lLWZveF8yLmpwZyIsImlhdCI6MTcwMDkxODU2MywiZXhwIjoxNzEzODc4NTYzfQ.-SSIZ25Mc_CWoagBwqmfAtW8jZQrPXIpXrf83HwXRzQ&t=2023-11-25T13%3A22%3A43.870Z', index: 1 },
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/frame-fox_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZyYW1lLWZveF8zLmpwZyIsImlhdCI6MTcwMDkxODU5OSwiZXhwIjoxNzEzODc4NTk5fQ.TDH8OEq13O58_4TXJRa7i5hzV654PuoGbmQhMRADMdg&t=2023-11-25T13%3A23%3A20.219Z', index: 2 },
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/frame-fox_4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZyYW1lLWZveF80LmpwZyIsImlhdCI6MTcwMDkxODYxMywiZXhwIjoxNzEzODc4NjEzfQ.Pft5Elj1C24gIr6VCvj8HLS6OkFunK7hwl8fznD80DE&t=2023-11-25T13%3A23%3A34.382Z', index: 3 },
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/frame-fox_5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZyYW1lLWZveF81LmpwZyIsImlhdCI6MTcwMDkxODYzMywiZXhwIjoxNzEzODc4NjMzfQ.7FByxih_fI78Ci9b-V-vegh-tua8WKlEPywe9HCYzSA&t=2023-11-25T13%3A23%3A54.114Z', index: 4 },
  { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/frame-fox_5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2ZyYW1lLWZveF81LmpwZyIsImlhdCI6MTcwMDkxODYzMywiZXhwIjoxNzEzODc4NjMzfQ.7FByxih_fI78Ci9b-V-vegh-tua8WKlEPywe9HCYzSA&t=2023-11-25T13%3A23%3A54.114Z', index: 5 }
]

// const carouselImagesData = [
//   { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/chighiale_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2NoaWdoaWFsZV8xLmpwZyIsImlhdCI6MTcwMDkyMDYxMywiZXhwIjoxNzEzODgwNjEzfQ.sg_V6VB4pXTi1nTSpMyc6ARxwDNFQYYs4F0dEBPSpO8&t=2023-11-25T13%3A56%3A54.772Z', index: 0 },
//   { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/chighiale_2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2NoaWdoaWFsZV8yLmpwZyIsImlhdCI6MTcwMDkyMDYzMSwiZXhwIjoxNzEzODgwNjMxfQ.Hzkcw40kpQpNeAsaN0k7gWkeWnsDWFZZ2IEI9fA9tSM&t=2023-11-25T13%3A57%3A12.380Z', index: 1 },
//   { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/chighiale_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2NoaWdoaWFsZV8zLmpwZyIsImlhdCI6MTcwMDkyMDY0NSwiZXhwIjoxNzEzODgwNjQ1fQ.0tbJQZ6EUYNJI8RJ72SmAYAzrX02y3wGu8v-5eo9Uns&t=2023-11-25T13%3A57%3A25.900Z', index: 2 },
//   { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/chighiale_4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2NoaWdoaWFsZV80LmpwZyIsImlhdCI6MTcwMDkyMDY1OSwiZXhwIjoxNzEzODgwNjU5fQ.6cQFogM1lt7sgz5paMxy8x-0RnqNsh6-usFG8lifHZU&t=2023-11-25T13%3A57%3A40.232Z', index: 3 },
//   { source: 'https://lzpjglicedvhpzcyafkn.supabase.co/storage/v1/object/sign/Horoscope_Images/chighiale_5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJIb3Jvc2NvcGVfSW1hZ2VzL2NoaWdoaWFsZV81LmpwZyIsImlhdCI6MTcwMDkyMDY3MSwiZXhwIjoxNzEzODgwNjcxfQ.xcNV9x9Xhjq1RxnoTHUE-zHQ_4sGZXCoSlBGCHrE2bk&t=2023-11-25T13%3A57%3A52.520Z', index: 4 }
// ]

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
