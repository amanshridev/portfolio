import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div  className='bg-slate-300/20'>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
