'use client';
// data
import mockData from '@/lib/api/netflix/mockData.json';

// component
import HeroSection from './HeroSection';
import CardList from './CardList';

// style
import styles from '@/styles/netflix/browse/components/main.module.scss';
import { useRef } from 'react';

const Main = () => {
    const heroData = mockData.heroCont;
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
                <CardList data={mockData.category1} />
                <CardList data={mockData.category2} />
                <CardList data={mockData.category3} />
            </section>
            <span></span>
        </main>
    );
};

export default Main;
