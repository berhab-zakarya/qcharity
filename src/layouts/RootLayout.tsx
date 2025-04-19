import { Outlet } from 'react-router-dom'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'


const RootLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout