// context API
import { createContext, useContext, useRef, useState } from 'react';
import styles from '@/styles/study/part2/part2.module.scss';
import Image from 'next/image';
import user from './user.jpg';

// ----------context 생성-----------
interface Common {
    gender: string;
    age: number;
    setGender: (gender: string) => void;
}
const CommonContext = createContext<Common>({
    gender: '여자',
    age: 27,
    setGender: () => {}, // 초기값 추가
});

// ----------context 제공-----------
const Example1 = () => {
    const [gender, setGender] = useState('남자');
    const age = 30;

    return (
        <CommonContext.Provider value={{ gender, age, setGender }}>
            <section className={styles.section}>
                <h2>- useContext</h2>

                <div className={styles.content}>
                    <strong>회원정보</strong>

                    <Gender />
                    <Age />
                </div>
            </section>
        </CommonContext.Provider>
    );
};

// ----------context 사용-----------
const Gender = () => {
    const { gender, setGender } = useContext(CommonContext);

    return (
        <div className={styles.box}>
            <Image src={user} alt="프로필" width={100} height={100} />
            <p>홍길동</p>
            <div className={styles.flex}>
                <p>성별: {gender}</p>
                <button onClick={() => setGender(gender === '여자' ? '남자' : '여자')}>변경</button>
            </div>
        </div>
    );
};

const Age = () => {
    const { age } = useContext(CommonContext);
    const countRef = useRef(0);

    return (
        <div className={styles.box}>
            <p>나이 : {age}</p>
            <div className={styles.flex}>
                <p>카운트 : {countRef.current}</p>
                <button onClick={() => countRef.current++}>증가</button>
            </div>
        </div>
    );
};

export default Example1;
