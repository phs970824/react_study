'use client';

import styles from './page.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <a href="/study">study</a>
                </li>
                <li>
                    <a href="/netflix/browse">netflix</a>
                </li>
            </ul>
        </div>
    );
}
