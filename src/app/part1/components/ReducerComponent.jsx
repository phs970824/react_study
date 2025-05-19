"use client";
import { useContext, useReducer } from "react";
import styles from "./components.module.scss";
import { themeContext } from "../page";

function reducer(state, action) {
    switch (action.type) {
        case "change_name":
            return {
                ...state,
                name: action.nextName,
            };
        case "increase_age":
            return {
                ...state,
                age: state.age + 1,
            };
        case "decrease_age":
            return {
                ...state,
                age: state.age - 1,
            };
        default:
            return state;
    }
}

const ReducerComponent = () => {
    const initialState = { name: "heesoon", phone: "010-1234-5678" };
    const [state, dispatch] = useReducer(reducer, initialState);

    const context = useContext(themeContext);

    function handleChangeName(e) {
        dispatch({
            type: "change_name",
            nextName: e.target.value,
        });
    }

    function handleChangePhone(e) {
        dispatch({
            type: "change_phone",
            nextPhone: e.target.value,
        });
    }

    return (
        <>
            <p>{context}</p>
            <p className={styles.description}>
                useState가 간단한 상태 업데이트에 적합하다면, useReducer는 보다 복잡한 변화와 여러개의 상태 업데이트 시
                사용된다.
            </p>
            <p className={styles.description}>
                예시: 입력 필드가 3개 이상 인 회원 정보. json의 한 묶음으로 정보를 가져오기 위한 경우
            </p>
            <div className="example">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.group}>
                        <label htmlFor="name">이름:</label>
                        <input type="text" id="name" value={state.name} onChange={handleChangeName} />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="phone">전화번호:</label>
                        <input type="text" id="phone" value={state.phone} onChange={handleChangePhone} />
                    </div>
                </form>
                3<button>제출</button>
            </div>
        </>
    );
};

export default ReducerComponent;
