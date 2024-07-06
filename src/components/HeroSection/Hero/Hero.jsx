import Block from "../../TestimonialsSection/Block/Block";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Partners from "../Partners/Partners";
import css from './Hero.module.css'
export default function Hero() {
    return (
        <div className={css.container}>
            <Block></Block>
            <Description></Description>
            <Options></Options>
            <Partners></Partners>
        </div>
    )
}