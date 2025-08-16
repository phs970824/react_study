"use client";
// data
import {
    heroCont,
    category1,
    category2,
    category3,
} from "@/lib/api/netflix/mockData.json";

// component
import HeroSection from "./Hero.Section";
import CardList from "./CardList";

// style
import styles from "@/styles/netflix/browse/components/main.module.scss";
import { useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const Main = () => {
    const heroData = heroCont;
    const [contents, setContents] = useState<any[]>([]);
    const page = useRef(1);
    const ovserverRef = useRef<HTMLDivElement | null>(null);

    // api 연결 전 임시 사용되는 mock 데이터
    // const getCategoryData = (categoryNum: number) => {
    //     const categoryMap: { [key: number]: any } = {
    //         1: category1,
    //         2: category2,
    //         3: category3,
    //     };
    //     return categoryMap[categoryNum];
    // };

    // const {
    //     data,
    //     // pageParam(지금까지 실행된  queryFn의 값을 순서대로 기록한 배열 !== queryFn의 pageParam), pages(지금까지 받아온 모든 데이터 == allPages) 프로퍼티를 갖는 객체 반환.
    //     fetchNextPage,
    //     hasNextPage,
    //     isFetchingNextPage,
    // } = useInfiniteQuery({
    //     queryKey: ['mockData'],
    //     queryFn: ({ pageParam }: { pageParam: number }) => getCategoryData(pageParam),
    //     // queryFn는 pageParam을 매개변수로 하는 콜백함수이다.
    //     // 이 pageParam은 호출되는 api 함수 (여기서는 getCategoryData)에 매개변수로 할당된다.
    //     // pageParam은 초기값이 undefined 이며 intialPageParam을 통해 개발자가 직접 설정도 가능
    //     initialPageParam: 1, // queryFn의 초기 PageParam 값
    //     getNextPageParam: (lastPage, allPages) => {
    //         // lastPage : 가장 마지막 (최신) 데이터 덩어리, allPages : 지금까지 받아온 모든 데이터 덩어리의 배열
    //         // 리턴값은 다음 queryFn이 실행될 때 pageParam의 값으로 할당
    //         return allPages.length <= 3 ? allPages.length + 1 : undefined;
    //     },
    // });

    return (
        <main
            className={styles.main}
            ref={ovserverRef}
            style={{ overflow: "hidden" }}
        >
            <HeroSection heroData={heroData} />
            <section className={styles.contents}>
                <h2 className="blind">카테고리별 콘텐츠</h2>
                {/* {contents.map((item, index) => {
                    return <SliderContainer key={index} data={item} />;
                    })} */}
                <CardList data={category1} />
                <CardList data={category2} />
                <CardList data={category3} />
            </section>
            <span></span>
        </main>
    );
};

export default Main;
