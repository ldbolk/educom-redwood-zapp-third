import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'
import './header.css';

const HeaderLayout = ({ children }) => {


  return(
    <>
      <Toaster />
      <header className="header">
        <a className="logo">
          <Link to={routes.home()}>
            <img src="zapp-banner.png" ></img>
          </Link>
        </a>
        <div className='header-right'>
          <a>
              <Link to={routes.klanten()}>Klanten</Link>
          </a>
          <a>
            <Link to={routes.taken()}>Taken</Link>
          </a>
        </div>
      </header>
    <main>{children}</main>
    </>
  )
}

// https://e-learning.educom.nu/assets/images/zapp-banner-6cdd55cdd42815c9c28dd9443933187f.png

export default HeaderLayout


// Add checks for login to show taken en klanten options