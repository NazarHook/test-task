import css from './Options.module.css'
import { NavLink } from 'react-router-dom'
export default function Options() {
    return (
        <div className={css.container}>
            <NavLink to='/courses' className={css.link}>Explore Courses</NavLink>
            <NavLink to='/pricing' className={css.link}>View Pricing</NavLink>
        </div>
    )
}