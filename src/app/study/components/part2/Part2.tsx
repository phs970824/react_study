import styles from '@/styles/study/part2/part2.module.scss';
import Example1 from './Example1';
import Example2 from './Example2';

const Part2 = () => {
    return (
        <main className={styles.part2}>
            <div className={styles.Wrap}>
                <Example1 />
                <Example2 />
            </div>
        </main>
    );
};

export default Part2;
