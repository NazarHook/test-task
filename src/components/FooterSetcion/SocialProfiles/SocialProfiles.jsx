import css from './SocialProfiles.module.css'
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'
import linkedin from '../../../assets/icons/linkedin.svg'
export default function SocialProfiles() {
    return (
        <div className={css.container}>
            <h5 className={css.title}>Social Profiles</h5>
        <ul className={css.list}>
          <li className={css.item}><img src={facebook} alt="facebook" /></li>
          <li className={css.item}><img src={twitter} alt="twitter" /></li>
          <li className={css.item}><img src={linkedin} alt="linkedin" /></li>
        </ul>
        </div>
    )
}