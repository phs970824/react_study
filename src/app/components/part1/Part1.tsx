"use client";

// styles
import styles from "@/styles/components/part1/part1.module.scss";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

const Part1 = () => {
    return (
        <div className={styles.Wrap}>
            <ul>
                <li>
                    <h2>- useRef</h2>
                    <Example1 />
                </li>
                <li>
                    <h2>- forwardRef</h2>
                    <Example2 />
                </li>
                <li>
                    <h2>- useImperativeHandle</h2>
                    <Example3 />
                </li>
            </ul>
        </div>
    );
};

export default Part1;
