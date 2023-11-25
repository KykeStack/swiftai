import { Component } from 'solid-js'
import ListVideoBox from './list-video-box'
import VideoRealTime from './video-real-time'
import CarouselScreenshots from './carousel-screenshots'

const Body: Component<{}> = (props) => {
  return (
    <div class='flex flex-row gap-4 w-screen h-screen overflow-scroll overflow-x-hidden pb-10'>
      <div class='h-fit w-full'>
        <h1 class='text-5xl dark:text-white text-black not-italic font-bold mt-20 ml-10'>Dashboard</h1>
        <ListVideoBox />
        <VideoRealTime />
        <CarouselScreenshots />
      </div>
      <div class='w-[40rem]'>
        <VideoRealTime />
        <ListVideoBox />
      </div>
    </div>
  )
}

export default Body
