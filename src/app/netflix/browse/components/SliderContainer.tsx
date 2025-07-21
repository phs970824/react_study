'use client';

import { useEffect, useRef } from 'react';
import SliderItem from './SliderItem';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { categoryType } from '@/lib/api/netflix/types';

// style
import styles from '@/styles/netflix/browse/components/sliderContainer.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderContainer = ({ data }: { data: categoryType }) => {
    const swiperRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                modules: [Navigation, Pagination],
                slidesPerView: 'auto',
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }, []);

    return (
        <div className={styles.sliderContainer}>
            <h3>{data.title}</h3>
            <ul ref={swiperRef} className={`swiper swiper-wrapper ${styles.sliderList}`}>
                {data.items.map((item) => (
                    <li key={item.id} className={`swiper-slide ${styles.sliderItem}`}>
                        <SliderItem item={item} />
                    </li>
                ))}
            </ul>
            {/* <ul className={styles.sliderList}>
                {data.items.map((item) => (
                    <li key={item.id} className={styles.sliderItem}>
                        <SliderItem item={item} />
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default SliderContainer;
