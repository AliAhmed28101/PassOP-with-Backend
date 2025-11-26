import React from 'react'

const Navbar = () => {
  return (
    
    <nav className='bg-slate-800 text-white'>


      <div className=' flex justify-around items-center px-4 py-4 mycontainer'>

      

      <div className="logo font-bold text-2xl">
        
        <span className='text-green-500'> 

                &lt;
        </span>
       Pass

         <span className='text-green-500'>
                 OP/&gt;
        </span>
       
       
        
        </div>

    <ul>
      <li className='flex gap-6'> 
        <a  className='hover:font-bold hover:text-green-500 transition-all' href=" / ">Home</a>
        <a className='hover:font-bold hover:text-green-500 transition-all' href="#">About</a>
         <a className='hover:font-bold hover:text-green-500 transition-all' href="#">Contact</a>
        
      </li>

      
    </ul>

    <button className='flex items-center justify-center gap-2 cursor-pointer ring-white ring-1 bg-green-600 rounded-3xl px-2 hover:bg-green-500'>
      <span className='invert w-12 '>
        <img className='p-1' src="/github.svg" alt="" />
      </span>
      <span className='font-bold'>
        Github
      </span>
      
    </button>



    </div>
    </nav>
   
  )
}

export default Navbar
