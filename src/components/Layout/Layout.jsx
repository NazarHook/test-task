import Bar from '../HeaderSection/Bar/Bar'
import AppBar from '../HeaderSection/AppBar/AppBar'
import css from './Layout.module.css'
import Hero from '../HeroSection/Hero/Hero'
import Benefits from '../BenefitsSection/Benefits/Benefits'
import Testimonials from '../TestimonialsSection/Testimonials/Testimonials'
import Footer from '../FooterSetcion/Footer/Footer'
export default function Layout() {
    return (
        <div >
            <div className={css.container}>
            <Bar></Bar>
            <AppBar></AppBar>
            <Hero></Hero>
            <Benefits></Benefits>
            <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </div>
    )
}