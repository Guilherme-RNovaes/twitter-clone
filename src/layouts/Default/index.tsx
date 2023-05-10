import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

import './styles.css'

function Default() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Default