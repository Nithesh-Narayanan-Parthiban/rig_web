'use client'

import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Carousel from "./components/Carousel"
import Events from "./components/Events"
import Content from "./components/Content"
import Contact from "./components/Footer"
import { Provider } from 'react-redux';
import { initializeStore } from '@/redux/store';


const page = () => {
  const store = initializeStore();
  return (
    
    <Provider store={store}>
      <Navbar/>
      <Landing/>
      <Carousel/>
      <Content/>
      <Events/>
      {/* <TeamDash/> */}
      <Contact/>
      </Provider>
  )
}

export default page;