import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>REACT 스터디</h1>
            <ul>
                <li>
                    <Link href="/part1">1. hook 정리</Link>
                </li>
            </ul>
        </main>
    );
}
