import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from "react";
import Layout from '../components/Layout/Layout'
function App() {
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
  const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'))
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Layout>   
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
     <Route path='/login' element={<LogInPage/>} />
     <Route path='*' element={<NotFoundPage/>} />
      </Routes>
        </Layout>
    </Suspense>
    </>
  )
}

export default App
