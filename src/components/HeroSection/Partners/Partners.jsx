import css from './Partners.module.css'
import zoom from '../../../assets/icons/zoom.svg'
import spotify from '../../../assets/icons/spotify.svg'
import zapier from '../../../assets/icons/zapier.svg'
import adobe from '../../../assets/icons/adobe.svg'
import netflix from '../../../assets/icons/netflix.svg'
import notion from '../../../assets/icons/notion.svg'
import amazon from '../../../assets/icons/amazon.svg'
import containerMobile from '../../../assets/images/mobile/container.png'
import containerLaptop from '../../../assets/images/laptop/container.png'
import containerDesktop from '../../../assets/images/desktop/container.png'
export default function Partners() {
    return (
        <div>
 <ul className={css.container}>
<li className={css.item}><img src={zapier} alt="zapier" /></li>
<li className={css.item}><img src={spotify} alt="spotify" /></li>
<li className={css.item}><img src={zoom} alt="zoom" /></li>
<li className={css.resp}><img src={amazon} alt="amazon" /></li>
<li className={css.resp}><img src={adobe} alt="adobe" /></li>
<li className={css.resp}><img src={notion} alt="notion" /></li>
<li className={css.resp}><img src={netflix} alt="netflix" /></li>
        </ul>
        <img className={css.photo}
  srcSet={`${containerMobile} 320w, ${containerMobile} 680w, ${containerLaptop}   960w, ${containerDesktop} 1980w`}
  alt="My Image"
/>
        </div>
    )
}