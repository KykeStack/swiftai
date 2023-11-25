import { Component } from 'solid-js'

const DataSubscription: Component<{}> = (props) => {
  return (
    <div class='flex justify-center content-center'>
      {/* <!-- Circular Progress --> */}
      <div class='relative h-80 w-80'>
        <svg class='h-full w-full' width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'>
          {/* <!-- Background Circle --> */}
          <circle cx='18' cy='18' r='16' fill='none' class='stroke-current text-orange-200 dark:text-gray-700' stroke-width='2' />
          {/* <!-- Progress Circle inside a group with rotation --> */}
          <g class='origin-center -rotate-90 transform'>
            <circle cx='18' cy='18' r='16' fill='none' class='stroke-current text-orange-400 ' stroke-width='2' stroke-dasharray='100' stroke-dashoffset='10' />
          </g>
        </svg>
        {/* <!-- Percentage Text --> */}
        <div class='absolute top-[46%] left-0 w-full text-center'>
          <span class='text-center font-boldtext-center text-lg not-italic font-medium'>Prossimo rinnovo</span>
        </div>
        <div class='absolute top-[54%] left-0 w-full text-center'>
          <span class='text-center font-boldtext-center text-lg not-italic font-medium'>30 Nov 2023</span>
        </div>
      </div>
    </div>
  )
}

export default DataSubscription
