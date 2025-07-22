"use client";

import { useRef } from "react";
import SliderItem from "./SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { categoryType } from "@/lib/api/netflix/types";

// style
import styles from "@/styles/netflix/browse/components/sliderContainer.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderContainer = ({ data }: { data: categoryType }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className={styles.sliderContainer}>
            <h3>{data.title}</h3>
            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    pagination={{
                        el: paginationRef.current,
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        // navigation 연결
                        if (
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== "boolean"
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }

                        // pagination 연결
                        if (
                            swiper.params.pagination &&
                            typeof swiper.params.pagination !== "boolean"
                        ) {
                            swiper.params.pagination.el = paginationRef.current;
                        }
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1281: {
                            slidesPerView: 6,
                        },
                    }}
                    spaceBetween={10}
                    className={styles.sliderList}
                >
                    {data.items.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className={styles.swiperSlide}
                        >
                            <SliderItem item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* 네비게이션 */}
                <button
                    className={styles.swiperBtnPrev}
                    ref={prevRef}
                    type="button"
                ></button>
                <button
                    className={styles.swiperBtnNext}
                    ref={nextRef}
                    type="button"
                ></button>

                {/* 페이지네이션 */}
                <div
                    className={styles.swiperPagination}
                    ref={paginationRef}
                ></div>
            </div>
        </div>
    );
};

export default SliderContainer;
