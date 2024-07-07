import css from './AppBar.module.css';
import logo from '../../../assets/icons/Logo.svg';
import burger from '../../../assets/icons/burger.svg';
import UserNav from '../UserNav/UserNav';
import Modal from '../Modal/Modal';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import PageNav from '../PageNav/PageNav';

export default function AppBar() {
    const [isActive, setIsActive] = useState(false); 
    const closeModal = () => {
        setIsActive(false);
    };
    return (
        <div className={css.container}>
            <div className={css.wrapper} >
            <NavLink className={css.logo} to='/'><img src={logo} className={css.logoIcon} alt="logo" /></NavLink>
            <PageNav></PageNav>
            </div>
            <div className={css.nav}>
                <UserNav />
                <button className={css.menu} type='button' onClick={() => setIsActive(true)}>
                    <img src={burger} alt="menu" />
                </button>
            </div>
            <Modal isActive={isActive} onClose={closeModal} />
        </div>
    );
}
