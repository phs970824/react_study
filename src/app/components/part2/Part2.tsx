import styles from '@/styles/components/part2/part2.module.scss';
import Example1 from './Example1';
import Example2 from './Example2';

const Part2 = () => {
    return (
        <div className={styles.Wrap}>
            <Example1 />
            <Example2 />
        </div>
    );
};

export default Part2;
