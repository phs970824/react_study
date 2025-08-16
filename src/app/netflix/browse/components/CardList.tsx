"use client";

import { useEffect, useRef, useState } from "react";
import SliderItem from "./CardItem";
import { motion } from "framer-motion";
import { categoryType } from "@/lib/api/netflix/types";

// style
import styles from "@/styles/netflix/browse/components/CardList.module.scss";

const CardList = ({ data }: { data: categoryType }) => {
    const [currentItem, setCurrentItem] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    const sliderItemRef = useRef<HTMLDivElement | null>(null);

    // 한 번에 보여지는 아이템의 개수
    const itemsPerScreen = 6;
    // 전체 아이템 개수
    const totalItems = data.items.length;
    // 총 페이지 수 (18개 / 6개 = 3페이지)
    const totalPages = Math.ceil(totalItems / itemsPerScreen);

    // 현재 페이지 번호 (0부터 시작)
    const currentPage = Math.floor(currentItem / itemsPerScreen);

    useEffect(() => {
        const element = sliderItemRef.current;
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            if (entries[0]) {
                setItemWidth(entries[0].contentRect.width);
                console.log(entries[0].contentRect.width);
            }
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    const handlePrev = () => {
        if (currentItem > 0) {
            setCurrentItem(currentItem - 1);
        }
    };

    const handleNext = () => {
        if (currentItem < totalPages - 1) {
            setCurrentItem(currentItem + 1);
        }
    };

    const xPosition = -currentItem * itemWidth;

    return (
        <div className={styles["card-list"]}>
            <div className={styles["pagination-wrap"]}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`${styles.pagination} ${
                            index === currentItem ? styles.active : ""
                        }`}
                    ></span>
                ))}
            </div>
            <h3>{data.title}</h3>
            <div className={styles.contents}>
                <motion.div
                    className={styles["slider-wrap"]}
                    animate={{ x: xPosition }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    ref={sliderItemRef}
                >
                    {data.items.map((item, index) => (
                        <SliderItem
                            key={item.id}
                            item={item}
                            className={`${styles["slider-item"]}`}
                            ref={index === 100 ? sliderItemRef : null}
                            isFirst={index % 6 === 0}
                            isLast={index % 6 === 5}
                        />
                    ))}
                </motion.div>
                <span className={`${styles["btn-prev"]} ${styles["btn-wrap"]}`}>
                    <button
                        type="button"
                        onClick={handlePrev}
                        style={currentItem === 0 ? { display: "none" } : {}}
                    >
                        <span className="blind">이전</span>
                    </button>
                </span>

                <span className={`${styles["btn-next"]} ${styles["btn-wrap"]}`}>
                    <button
                        type="button"
                        onClick={handleNext}
                        style={
                            currentItem === totalPages - 1
                                ? { display: "none" }
                                : {}
                        }
                    >
                        <span className="blind">다음</span>
                    </button>
                </span>
            </div>
        </div>
    );
};

export default CardList;
