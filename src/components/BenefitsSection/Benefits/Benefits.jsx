import BenefList from "../BenefList/BenefList";
import BenefTitle from "../BenefTitle/BenefTitle";
import css from './Benefits.module.css'
export default function Benefits() {
    return (
        <div className={css.container}>
            <BenefTitle></BenefTitle>
            <BenefList></BenefList>
        </div>
    )
}