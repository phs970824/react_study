'use client';
import { useState } from 'react';

// components
import Header from './components/layout/header';
import Part1 from './components/part1/Part1';
import Part2 from './components/part2/Part2';

// styles
import styles from './page.module.scss';

type dataType = {
    id: number;
    title: string;
};

export default function Home() {
    const data: dataType[] = [
        { id: 0, title: '5/21 useRef' },
        { id: 1, title: '6/21 Context API' },
    ];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <Header onClick={() => setActiveIndex(null)} />
            <main className={styles.main}>
                {activeIndex === null && (
                    <ul className={styles.list}>
                        {data.map((item, idx) => {
                            return (
                                <li key={item.id}>
                                    <button type="button" onClick={() => setActiveIndex(idx)}>
                                        - {item.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
                {activeIndex === 0 && <Part1 />}
                {activeIndex === 1 && <Part2 />}
            </main>
        </>
    );
}
