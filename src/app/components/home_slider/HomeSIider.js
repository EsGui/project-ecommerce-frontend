import Slide from "@/app/features/Slide";
import styles from "../../styles/home_slider/HomeSlider.module.css"

export default function HomeSlider() {
    return (
        <div className={ styles.HomeSliderContainer }>
            <Slide />
        </div>
    )
}