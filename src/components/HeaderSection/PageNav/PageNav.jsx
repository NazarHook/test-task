import css from './PageNav.module.css'
import { NavLink } from 'react-router-dom';
export default function PageNav({isActive}) {
    const getClasses = () => {
        return  isActive ? `${css.list} ${css.active}` : css.list;
    };
    return (
<ul className={css.list}>
<li className={css.item}><NavLink to='/' className={css.link}>Home</NavLink></li>
<li className={css.item}><NavLink to='/courses' className={css.link}>Courses</NavLink></li>
<li className={css.item}><NavLink to='/aboutus' className={css.link}>About Us</NavLink></li>
<li className={css.item}><NavLink to='/pricing' className={css.link}>Pricing</NavLink></li>
<li className={css.item}><NavLink to='/contact' className={css.link}>Contact</NavLink></li>
</ul>
    )
}