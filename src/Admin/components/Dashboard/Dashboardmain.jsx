import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
    <div className='grid-container '>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
    <div className='absolute top-16 '>
    <Dashboard  />
    </div>
    </div>
      )
}

export default App