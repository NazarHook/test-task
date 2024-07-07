import abstract from '../../../assets/icons/abstract.svg'
import lighting from '../../../assets/icons/lightning.svg'
import css from './Block.module.css'
export default function Block() {
    return (
        <div className={css.container}>
            <img className={css.absIcon} src={abstract} alt="abstract" />
            <span className={css.lightBg}><img src={lighting} className={css.lightIcon} alt="lighting"/></span>
            <p className={css.text}><span className={css.unCol}>Unlock</span> Your Creative Potential</p>
        </div>
    )
}