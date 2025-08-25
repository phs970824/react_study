'use client';
// data
import mockData from '@/lib/api/netflix/mockData.json';

// component
import HeroSection from './HeroSection';
import CardList from './CardList';

// style
import styles from '@/styles/netflix/browse/components/main.module.scss';
import { useEffect, useRef } from 'react';
import { cardListData } from './cardListData';
import { useInfiniteQuery } from '@tanstack/react-query';
import { categoryType } from '@/lib/api/netflix/types';
import cardListMock from '@/lib/api/netflix/cardListMock.json';

const Main = () => {
    const heroData = mockData.heroCont;
    const observerRef = useRef<HTMLDivElement | null>(null);
    const settingData = [cardListMock.category1, cardListMock.category2, cardListMock.category3];

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['cardListMock'],
        queryFn: ({ pageParam }) => cardListData(pageParam),
        initialPageParam: 4,
        getNextPageParam: (lastPage, allPages) => (allPages.length <= 4 ? allPages.length + 1 : undefined),
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        });

        const currentRef = observerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    const page = data?.pages.flat() as categoryType[];

    return (
        <main className={styles.main}>
            <HeroSection heroData={heroData} />
            <section className={styles.contents}>
                <h2 className="blind">카테고리별 콘텐츠</h2>
                {settingData.map((item: categoryType, index: number) => {
                    return <CardList key={index} data={item} />;
                })}
                {page?.map((item: categoryType, index: number) => {
                    return <CardList key={index} data={item} />;
                })}
            </section>
            {data && hasNextPage && !isFetchingNextPage && <span ref={observerRef}></span>}
        </main>
    );
};

export default Main;
