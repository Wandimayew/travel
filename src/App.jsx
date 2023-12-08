import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import List from './components/List'
import Contact from './components/Contact'
import Frame from './components/Frame'
import HorizontalScrol from './components/HorizontalScrol'

function App() {

  return (
    <div className='flex items-center p-4 gap-16 flex-col'>
      <Navbar />
      <Home />
      <Frame />
      <HorizontalScrol />
      <List />
      <Contact />
    </div>
  )
}

export default App
