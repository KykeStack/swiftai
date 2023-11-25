import { Component } from 'solid-js'
import SideBar from './side-bar'
import Body from './body'
import GeneralModal from './general-modal'

const MainPage: Component<{}> = (props) => {
  return (
    <div class='w-screen h-screen flex flex-row'>
      <GeneralModal />
      <SideBar />
      <Body />
    </div>
  )
}

export default MainPage
