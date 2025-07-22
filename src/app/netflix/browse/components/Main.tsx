"use client";
// data
import { heroCont, category } from "@/lib/api/netflix/mockData.json";

// component
import HeroSection from "./Hero.Section";
import SliderContainer from "./SliderContainer";

// style
import styles from "@/styles/netflix/browse/components/main.module.scss";

const Main = () => {
    const heroData = heroCont;
    const sliderItemsData = category;

    return (
        <main className={styles.main}>
            <HeroSection heroData={heroData} />
            <section className={styles.contents}>
                <h2 className="blind">카테고리별 콘텐츠</h2>
                <SliderContainer data={sliderItemsData} />
                <SliderContainer data={sliderItemsData} />
                <SliderContainer data={sliderItemsData} />
                <SliderContainer data={sliderItemsData} />
                <SliderContainer data={sliderItemsData} />
            </section>
        </main>
    );
};

export default Main;
