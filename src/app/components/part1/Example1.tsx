"use client";
import { useRef, useState } from "react";
import styles from "@/styles/components/part1/part1.module.scss";

// useRef
// 요소에 접근하여 조작
const Example1 = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };
    // -------------------------------
    let variable: number = 0;
    const variableRef = useRef<number>(0);
    const [count, setCount] = useState(0);

    return (
        <div className={styles.contents}>
            <div className={styles.box1}>
                <input type="text" ref={inputRef} />
                <button type="button" onClick={handleClick}>
                    포커싱 버튼
                </button>
            </div>

            <div className={styles.box2}>
                <div>
                    <p>일반 변수 : {variable}</p>
                    <button type="button" onClick={() => variable++}>
                        증가
                    </button>
                </div>
                <div>
                    <p>useRef 변수 : {variableRef.current}</p>
                    <button type="button" onClick={() => variableRef.current++}>
                        증가
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => alert(`일반 변수 : ${variable}, useRef 변수 : ${variableRef.current}`)}
                    >
                        값 확인
                    </button>
                    <button type="button" onClick={() => setCount(count + 1)}>
                        리렌더링 : {count}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Example1;
