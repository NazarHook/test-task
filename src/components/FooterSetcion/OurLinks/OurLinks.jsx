import css from './OurLinks.module.css'
export default function OurLinks() {
    return (
        <div className={css.container}>
           <ul className={css.list}>
            <h5 className={css.title}>Home</h5>
            <li className={css.item}>Benefits</li>
            <li className={css.item}>Our Courses</li>
            <li className={css.item}>Our Testimonials</li>
            <li className={css.item}>Our FAQ</li>
           </ul>
           <ul className={css.list}>
            <h5 className={css.title}>About Us</h5>
            <li className={css.item}>Company</li>
            <li className={css.item}>Achievements</li>
            <li className={css.item}>Our Goals</li>
           </ul>
        </div>
    )
}