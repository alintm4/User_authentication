import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './root.jsx'
import LoginForm from './components/LoginForm.jsx'
import SignUpForm from './components/SignUpForm.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <><Route path='/' element={<Root />} />
    <Route path='/login' element={<LoginForm />} />
    <Route path='/signup' element={<SignUpForm />}/></>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
