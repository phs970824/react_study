"use client";
import { useState } from "react";

// components
import Header from "./components/layout/header";
import Part1 from "./components/part1/Part1";

// styles
import styles from "./page.module.scss";

type dataType = {
    id: number;
    title: string;
};

export default function Home() {
    const data: dataType[] = [{ id: 0, title: "5/21 useRef" }];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <Header />
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
            </main>
        </>
    );
}
