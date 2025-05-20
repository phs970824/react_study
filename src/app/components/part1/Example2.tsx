import styles from "@/styles/components/part1/part1.module.scss";
import { forwardRef, useRef } from "react";

const Example2 = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={styles.contents}>
            <p className={styles.title}>부모 컴포넌트</p>

            <div className={styles.box1}>
                <button type="button" onClick={() => inputRef.current?.focus()}>
                    포커싱 버튼
                </button>
            </div>

            <ChildComponent ref={inputRef} />
        </div>
    );
};

const ChildComponent = forwardRef<HTMLInputElement>(function ChildComponent(_, ref) {
    return (
        <div className={`${styles.contents} ${styles.child}`}>
            <p className={styles.title}>자식 컴포넌트</p>

            <div className={styles.box1}>
                <input type="text" ref={ref} />
            </div>
        </div>
    );
});

export default Example2;
