import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage.jsx'));
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'));
const CoursesPage = lazy(() => import('../pages/CoursesPage/CoursesPage'));
const AboutUsPage = lazy(() => import('../pages/AboutUsPage/AboutUsPage'));
const PricingPage = lazy(() => import('../pages/PricingPage/PricingPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
function App() {
  return (
    <>
       <Suspense fallback={<Loader/>}>
<Routes>
<Route path="/" element={< HomePage/>}/>
  <Route path="/signup" element={<SignUpPage />} />
  <Route path="/login" element={<LogInPage />} />
  <Route path="/courses" element={<CoursesPage />} />
  <Route path="/aboutus" element={<AboutUsPage />} />
  <Route path="/pricing" element={<PricingPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>
</Suspense>
    </>
  );
}
export default App;