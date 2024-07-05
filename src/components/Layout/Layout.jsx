import Bar from '../Bar/Bar'
import AppBar from '../AppBar/AppBar'
import css from './Layout.module.css'
import Hero from '../Hero/Hero'
export default function Layout() {
    return (
        <div className={css.container}>
            <Bar></Bar>
            <AppBar></AppBar>
            <Hero></Hero>
        </div>
    )
}