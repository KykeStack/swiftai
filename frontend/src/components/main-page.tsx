import { Component } from 'solid-js'
import SideBar from './side-bar'
import Body from './body'

const MainPage: Component<{}> = (props) => {
  return (
    <div class='w-screen h-screen flex flex-row'>
      <SideBar />
      <Body />
    </div>
  )
}

export default MainPage
