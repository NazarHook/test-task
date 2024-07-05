import css from './Partners.module.css'
import zoom from '../../assets/icons/zoom.svg'
import spotify from '../../assets/icons/spotify.svg'
import zapier from '../../assets/icons/zapier.svg'
import container from '../../assets/images/Container.jpg'
export default function Partners() {
    return (
        <div>
 <ul className={css.container}>
<li><img src={zapier} alt="zapier" /></li>
<li><img src={spotify} alt="spotify" /></li>
<li><img src={zoom} alt="zoom" /></li>
        </ul>
        <img className={css.vid} src={container} alt="container" />
        </div>
    )
}