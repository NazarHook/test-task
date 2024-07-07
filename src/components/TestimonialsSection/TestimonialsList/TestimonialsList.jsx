import css from './TestimonialsList.module.css'
import sarah from '../../../assets/images/mobile/sarah.jpg'
import jason from '../../../assets/images/mobile/jason.jpg'
import emily from '../../../assets/images/mobile/emily.jpg'
import michael from '../../../assets/images/mobile/michael.jpg'
export default function TestimonialsList() {
    return (
        <ul className={css.list}>
    <li className={css.item}>
        <div className={css.text}>
        <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
        </div>
        <div className={css.wrapper}>
            <div className={css.block}>
            <img className={css.photo} src={sarah} alt="sarah" />
            <h4 className={css.title}>Sarah L</h4>
            </div>
            <button className={css.btn} type="button">Read Full Story</button>
        </div>
    </li>
    <li className={css.item}>
        <div className={css.text}>
        <p>The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!</p>
        </div>
        <div className={css.wrapper}>
            <div className={css.block}>
            <img className={css.photo} src={jason} alt="jason" />
            <h4 className={css.title}>Jason M</h4>
            </div>
            <button className={css.btn} type="button">Read Full Story</button>
        </div>
    </li>
    <li className={css.item}>
        <div className={css.text}>
        <p>The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</p>
        </div>
        <div className={css.wrapper}>
            <div className={css.block}>
            <img className={css.photo} src={emily} alt="emily" />
            <h4 className={css.title}>Emily R</h4>
            </div>
            <button className={css.btn} type="button">Read Full Story</button>
        </div>
    </li>
    <li className={css.item}>
        <div className={css.text}>

        <p>I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!</p>
        </div>
        <div className={css.wrapper}>
            <div className={css.block}>
            <img className={css.photo} src={michael} alt="michael" />
            <h4 className={css.title}>Michael K</h4>
            </div>  
            <button  className={css.btn} type="button">Read Full Story</button>
        </div>
    </li>
        </ul>
    )
}