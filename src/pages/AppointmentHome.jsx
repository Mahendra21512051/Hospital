
import Header from '../components/Header'
import SpecalityMenu from '../components/SpecalityMenu'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/Banner'
const AppointmentHome = () => {
  return (
    <div className='mt-20 w-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20'>
      <Header/>
      <SpecalityMenu/>
      <TopDoctor/>
      <Banner/>
    </div>
  )
}

export default AppointmentHome