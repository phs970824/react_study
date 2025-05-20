import styles from "@/styles/components/part1/part1.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";

type ChildHandle = {
    focus: () => void;
};

const Example3 = () => {
    const inputRef = useRef<ChildHandle>(null);
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

const ChildComponent = forwardRef<ChildHandle>(function ChildComponent(_, ref) {
    const newInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                newInputRef.current?.focus();
                alert("메서드 커스터마이징");
            },
        };
    });

    return (
        <div className={`${styles.contents} ${styles.child}`}>
            <p className={styles.title}>자식 컴포넌트</p>

            <div className={styles.box1}>
                <input type="text" ref={newInputRef} />
            </div>
        </div>
    );
});

export default Example3;
