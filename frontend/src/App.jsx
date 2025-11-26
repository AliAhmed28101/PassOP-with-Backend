
import './App.css'

import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
      
      <div className='bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]' >
        <Manager/>
        </div>
      
      
    
    <Footer/>
 
    
    </>
  )
}

export default App
