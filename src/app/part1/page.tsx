"use client";
import styles from "./page.module.scss";
import { createContext } from "react";

//components
import StateComponent from "./components/StateComponent";
import ReducerComponent from "./components/ReducerComponent";

export const themeContext = createContext<string>("light");
const Part1 = () => {
    return (
        <themeContext.Provider value="nnnn">
            <div className={styles.container}>
                <header className="header">
                    <h1>hook 정리</h1>
                </header>
                <main className={styles.main}>
                    <ul className={styles.list}>
                        <li>
                            <p>1.상태관리</p>
                            <ul className={styles.subList}>
                                <li>
                                    <strong>- useState</strong>
                                    <StateComponent />
                                </li>
                                <li>
                                    <strong>- useReducer</strong>
                                    <ReducerComponent />
                                </li>
                                <li>
                                    <strong>- useContext</strong>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>2. 렌더링/생명주기</p>
                            <ul className={styles.subList}>
                                <li>
                                    <strong>- useEffect </strong>
                                </li>
                                <li>
                                    <strong>- useLayoutEffect </strong>
                                </li>
                                <li>
                                    <strong>- useRef + forwardRef </strong>
                                </li>
                                <li>
                                    <strong>- useImperativeHandle</strong>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>3. 최적화</p>
                            <ul className={styles.subList}>
                                <li>
                                    <strong>- useMemo + React.memo </strong>
                                </li>
                                <li>
                                    <strong>- useCallback</strong>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </main>
            </div>
        </themeContext.Provider>
    );
};

export default Part1;
