import { Component } from 'solid-js'
import SearchConfigBar from './search-config-bar'
import VideoRealTime from './video-real-time'
import CarouselScreenshots from './carousel-screenshots'
import VideoPreviewBox from './video-preview-box'
import DataSection from './data-section'
import ProfileButton from './profile-button'

const Body: Component<{}> = (props) => {
  return (
    <div class='flex flex-row gap-4 w-screen h-screen overflow-scroll overflow-x-hidden pb-10 pr-10'>
      <div class='h-fit w-[55rem]'>
        <h1 class='text-5xl dark:text-white text-black not-italic font-bold mt-20 ml-10'>Dashboard</h1>
        <SearchConfigBar />
        <VideoRealTime />
        <CarouselScreenshots />
      </div>
      <div class='h-fit w-[40rem] relative'>
        <ProfileButton />
        <VideoPreviewBox />
        <DataSection />
      </div>
    </div>
  )
}

export default Body
