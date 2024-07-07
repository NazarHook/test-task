import css from './ContactInfo.module.css'
import tel from '../../../assets/icons/tel.svg'
import geo from '../../../assets/icons/geo.svg'
import mail from '../../../assets/icons/mail.svg'
import { Link } from 'react-router-dom'
export default function ContactInfo() {
    return (
        <ul className={css.list}>
            <li className={css.item}>
                <img className={css.icon} src={mail} alt="email" />
                <Link className={css.link} href='mailto:hello@skillbridge.com' >hello@skillbridge.com</Link>
            </li>
            <li className={css.item}>
                <img className={css.icon} src={tel} alt="phone" />
                <Link className={css.link}  href='tel:+9191813232309' >+91 91813 23 2309</Link>
            </li>
            <li className={css.item}>
                <img className={css.icon} src={geo} alt="location" />
                <Link className={css.link} >Somewhere in the World</Link>
            </li>
        </ul>
    )
}