"use client";
import React, { useState } from "react";
import styles from "./components.module.scss";

// 부모 컴포넌트
const StateComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>부모 컴포넌트 : {count}</p>
            <div>
                자식 컴포넌트 : <StateChild onPlus={() => setCount(count + 1)} onMinus={() => setCount(count - 1)} />
            </div>
        </div>
    );
};

// 자식 컴포넌트
const StateChild = ({ onPlus, onMinus }) => {
    return (
        <>
            <button type="button" className={styles.button} onClick={onPlus}>
                +1
            </button>
            <button type="button" className={styles.button} onClick={onMinus}>
                -1
            </button>
        </>
    );
};

export default StateComponent;
