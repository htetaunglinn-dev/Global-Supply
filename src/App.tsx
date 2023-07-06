import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import LoadingScreen from 'components/LoadingScreen.tsx/LoadingScreen'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
