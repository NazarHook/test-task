import rightUpArrow from '../../../assets/icons/rightUpArrow.svg'
import css from './BenefList.module.css'
export default function BenefList() {
    return (
        <ul className={css.container}>
            <li className={css.item}>
                <span className={css.num}>01</span>
            <h3 className={css.title}>Flexible Learning Schedule</h3>
            <p className={css.text}>Fit your coursework around your existing commitments and obligations.</p>
            <span className={css.arrEl}>
                <img className={css.icon} src={rightUpArrow} alt="arrowIcon" />
            </span>
            </li>
            <li className={css.item}>
                <span className={css.num}>02</span>
             <h3 className={css.title}>Expert Instruction</h3>
            <p className={css.text}>Learn from industry experts who have hands-on experience in design and development.</p>
            <span className={css.arrEl}>
                <img className={css.icon} src={rightUpArrow} alt="arrowIcon" />
            </span>
            </li>
            <li className={css.item}>
                <span className={css.num}>03</span>
            <h3 className={css.title}>Diverse Course Offerings</h3>
            <p className={css.text}>Explore a wide range of design and development courses covering various topics.</p>
            <span className={css.arrEl}>
                <img className={css.icon} src={rightUpArrow} alt="arrowIcon" />
            </span>
            </li>
            <li className={css.item}>
                <span className={css.num}>04</span>
             <h3 className={css.title}>Updated Curriculum</h3>
            <p className={css.text}>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
            <span className={css.arrEl}>
                <img className={css.icon}  src={rightUpArrow} alt="arrowIcon" />
            </span>
            </li>
            <li className={css.resp}>
                <span className={css.num}>05</span>
             <h3 className={css.title}>Practical Projects and Assignments</h3>
            <p className={css.text}>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
            <span className={css.arrEl}>
                <img className={css.icon} src={rightUpArrow} alt="arrowIcon" />
            </span>
            </li>
            <li className={css.resp}>
                <span className={css.num}>06</span>
             <h3 className={css.title}>Interactive Learning Environment</h3>
            <p className={css.text}>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
            <span className={css.arrEl}>
                <img className={css.icon} src={rightUpArrow} alt="arrowIcon" />
            </span>
            </li>
        </ul>
    )
}