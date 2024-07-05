import css from './UserNav.module.css'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
export default function UserNav() {
    const getClasses = ({isActive}) => {
        return clsx(css.link, isActive && css.active);
    }
    return (
            <nav className={css.nav}>
            <NavLink to='/signup' className={getClasses}>Sign Up</NavLink>
            <NavLink to='/login' className={getClasses}>Login</NavLink>
            </nav>
    )
}