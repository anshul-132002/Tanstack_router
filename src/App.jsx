import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
