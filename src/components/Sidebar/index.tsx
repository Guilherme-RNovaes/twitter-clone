import './styles.css'
import { Bell, Hash, House, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from 'phosphor-react'

import twitterLogo from '../../assets/logo-twitter.svg'

function Sidebar() {
  return (
    <div>
      <aside className="sidebar">
        <img className='logo' src={twitterLogo} alt="logo" />
        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill' />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messeges
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>
    </div>
  )
}

export default Sidebar