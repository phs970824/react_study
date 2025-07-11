// Zustand
import { useRef } from 'react';
import { create } from 'zustand';
import styles from '@/styles/study/part2/part2.module.scss';
import Image from 'next/image';
import user from './user.jpg';

// ----------store 생성----------
interface Common {
    gender: string;
    age: number;
    setGender: () => void;
}
const useCommonStore = create<Common>((set) => ({
    gender: '여자',
    age: 27,
    setGender: () => set((state) => ({ ...state, gender: state.gender === '여자' ? '남자' : '여자' })),
}));

// -------------------------
const Example2 = () => {
    return (
        <section className={styles.section}>
            <h2>- Zustand</h2>
            <div className={styles.content}>
                <strong>회원정보</strong>
                <Gender />
                <Age />
            </div>
        </section>
    );
};

// ---------- store 사용----------
const Gender = () => {
    const gender = useCommonStore((state) => state.gender);
    const setGender = useCommonStore((state) => state.setGender);

    return (
        <div className={styles.box}>
            <Image src={user} alt="프로필" width={100} height={100} />
            <p>홍길동</p>
            <div className={styles.flex}>
                <p>성별 : {gender}</p>
                <button onClick={() => setGender()}>변경</button>
            </div>
        </div>
    );
};

const Age = () => {
    const age = useCommonStore((state) => state.age);
    const countRef = useRef(0);

    return (
        <div className={styles.box}>
            <p>나이 : {age}</p>
            <div className={styles.flex}>
                <p>카운트 : {countRef.current}</p>
                <button onClick={() => countRef.current++}>증가</button>
                <button onClick={() => alert(`ref : ${countRef.current}`)}>확인</button>
            </div>
        </div>
    );
};

export default Example2;
