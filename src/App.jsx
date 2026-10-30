import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import Home from './Page/Home'
import Nav from './Componet/Nav'
// import About from './Page/About'
import AppRoute from './Componet/AppRoute'
import { createContext } from 'react'
export const context = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [store,setStore] = useState([])
  return (
    // <>
     <context.Provider value={{store,setStore}}>
        <Nav></Nav>
        {/* <Home></Home>
        <About></About> */}
        <AppRoute></AppRoute>
    </context.Provider> 
    // </>
  )
}

export default App
