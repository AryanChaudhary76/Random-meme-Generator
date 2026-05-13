import Random from './components/Random.jsx'
import './App.css'
import Tag from './components/Tag.jsx'

function App() {


  return (
    <div className='w-full h-auto flex flex-col relative items-center background'>
      <h1 className= 'bg-white rounded-md absolute  w-11/12 mt-[40px]   text-center px-10 py-2 text-3xl font-bold mx-auto '>Random GIFs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[100px]'>
      <Random></Random>
      <Tag></Tag>
      
      
      
      </div>
     
    </div>
  )
}

export default App
