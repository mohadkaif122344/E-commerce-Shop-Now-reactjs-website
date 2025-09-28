
import Header from './sections/Header'
import Hero from './sections/Hero'
import Category from './sections/Category'
import Types from './sections/Types'
import Services from './sections/Services'
import Productsgrid from './sections/Productsgrid'
import Banner from './sections/Banner'
import Reviews from './sections/Reviews'
import Insta from './sections/Insta'
import Footer from './sections/Footer'
import Location from './sections/Location'

const App = () => {
 
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <Header />
      <Hero/>
      <Location />
      <Category/>
      <Types/>
      <Services/>
      <Productsgrid />
      <Banner/>
      <Reviews/>
      <Insta/>
      <Footer/>
    </div>
  )
}

export default App
