import css from "./BenefTitle.module.css";
export default function BenefTitle() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Benefits</h2>
            <p className={css.text}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <button className={css.btn} type="button">View All</button>
        </div>
    )
}