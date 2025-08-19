'use client';
// data
import { heroCont, category1, category2, category3 } from '@/lib/api/netflix/mockData.json';

// component
import HeroSection from './HeroSection';
import CardList from './CardList';

// style
import styles from '@/styles/netflix/browse/components/main.module.scss';
import { useRef } from 'react';

const Main = () => {
    const heroData = heroCont;
    const ovserverRef = useRef<HTMLDivElement | null>(null);

    // api 연결 전 임시 사용되는 mock 데이터

    return (
        <main className={styles.main} ref={ovserverRef} style={{ overflow: 'hidden' }}>
            <HeroSection heroData={heroData} />
            <section className={styles.contents}>
                <h2 className="blind">카테고리별 콘텐츠</h2>
                {/* {contents.map((item, index) => {
                    return <CardList key={index} data={item} />;
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
