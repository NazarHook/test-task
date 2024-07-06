import css from './Bar.module.css'
import arrow from '../../../assets/icons/arrow.svg'
export default function Bar() {
    return (
        <div className={css.container}>Free Courses 🌟 Sale Ends Soon, Get It Now <img src={arrow} alt="arrow" /></div>
    )
}