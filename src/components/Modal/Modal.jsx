import css from './Modal.module.css'
import xMark from '../../assets/icons/x-mark.svg'
import { NavLink } from 'react-router-dom'
export default function Modal({setIsActive}) {
    const closeModal = () => {
          setIsActive(false)
    }
    return (
        <div className={css.container}>
            <button onClick={closeModal} className={css.closeIcon} type='button'>
            <img src={xMark} alt="close icon" />
            </button>
             <ul className={css.list}>
                <li>
                    <NavLink className={css.link} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={css.link} to='/courses'>Courses</NavLink>
                </li>
                <li>
                    <NavLink className={css.link} to='/aboutus'>About Us</NavLink>
                </li>
                <li>
                    <NavLink className={css.link} to='/pricing'>Pricing</NavLink>
                </li>
                <li>
                    <NavLink className={css.link} to='/contact'>Contact</NavLink>
                </li>
             </ul>
        </div>
    )
}