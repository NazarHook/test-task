import css from './AppBar.module.css'
import logo from '../../../assets/icons/Logo.svg'
import burger from '../../../assets/icons/burger.svg'
import UserNav from '../UserNav/UserNav'
import Modal from '../Modal/Modal';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function AppBar() {
      const [isActive, setIsActive] = useState(false)
      const openModal = () => {
        setIsActive(true)
      }
    return (
        <div className={css.container}>
          <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
            <div className={css.nav}>
            <UserNav></UserNav>
            <button onClick={openModal} className={css.menu} type='button'>
            <img  src={burger} alt="menu" />
            </button>
            </div>
            {isActive && <Modal setIsActive={setIsActive}></Modal>}
        </div>
    )
}