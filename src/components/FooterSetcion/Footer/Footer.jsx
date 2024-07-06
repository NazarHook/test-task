import ContactInfo from '../ContactInfo/ContactInfo'
import SkillBridge from '../SkillBridge/SkillBridge'
import SocialProfiles from '../SocialProfiles/SocialProfiles'
import logo from '../../../assets/icons/Logo.svg'
import { NavLink } from 'react-router-dom'
import css from './Footer.module.css'
import OurLinks from '..//OurLinks/OurLinks'
export default function Footer() {
    return (
        <footer className={css.footer}>
 <div className={css.container}>
      <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
      <ContactInfo></ContactInfo>
      <OurLinks></OurLinks>
      <SocialProfiles></SocialProfiles>
      <SkillBridge></SkillBridge>
        </div>
        </footer>
    )
}