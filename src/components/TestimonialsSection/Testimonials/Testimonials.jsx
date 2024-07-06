import TestimonialsList from '../TestimonialsList/TestimonialsList'
import TestimonialsTitle from '../TestimonialsTitle/TestimonialsTitle'
import css from './Testimonials.module.css'
export default function Testimonials() {
    return (
        <div className={css.container}>
           <TestimonialsTitle></TestimonialsTitle>
           <TestimonialsList></TestimonialsList>
        </div>
    )
}