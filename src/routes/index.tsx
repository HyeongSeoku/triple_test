import { Route, Routes } from 'react-router-dom'

import MainPage from './Main'
import RedirectPage from './RedirectPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='appStore' element={<RedirectPage />} />
      <Route path='playStore' element={<RedirectPage />} />
    </Routes>
  )
}

export default App
