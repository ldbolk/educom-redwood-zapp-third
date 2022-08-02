import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'


const HeaderLayout = ({ children }) => {
  return(
    <>
      <Toaster />
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-400 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link className="text-blue-400 hover:text-blue-100 transition duration-100" to={routes.home()}>
            <img src="https://e-learning.educom.nu/assets/images/zapp-banner-6cdd55cdd42815c9c28dd9443933187f.png" width="350" height="115"></img>
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded" to={routes.klanten()}>
                Klanten
              </Link>
            </li>
              <li>
                <Link className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded" to={routes.taken()}>Taken</Link>
              </li>
          </ul>
        </nav>
      </header>
    <main>{children}</main>
    </>
  )
}

export default HeaderLayout
