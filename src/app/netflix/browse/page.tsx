'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { AnimatePresence } from 'motion/react';
import DetailModal from './components/DetailModal';
import { useSearchParams } from 'next/navigation';
import { ModalProvider } from './components/ModalContext';
import { GlobalModal } from './components/SimpleModal';

interface NetflixProps {
    searchParams: {
        id?: string;
    };
}

const Netflix = () => {
    const searchParams = useSearchParams();
    const selecteId = searchParams.get('id');

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET',
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDY2MzkwZTMzZTIzMzI1MTdjOTI1MTNjYjExYzlhMiIsIm5iZiI6MTc1MjE5OTUxNC42MDQsInN1YiI6IjY4NzA3MTVhNGFiY2NhNmNlMWJhMjhjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TuMj__34J1sinK7IgcZYR-u55kgPimTRMTu-gtYoJMM',
                accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => setData(data.results));
    }, []);

    return (
        <>
            <ModalProvider>
                <Header />
                <Main />
                <Footer />
                <GlobalModal />

                <AnimatePresence>{selecteId && <DetailModal id={selecteId} key="modal" />}</AnimatePresence>
                {/* key="modal" 을 사용하는 이유 :
            모달이 DOM에서 즉시 제거되지 않고, exit 애니메이션이 끝날 때까지 기다림
            어떤 컴포넌트가 사라져야 하는지 React가 판단하기 위해 key값 필요
            key값이 없으면 모달이 즉시 DOM에서 제거되어 Framer Motion의 exit 애니메이션이 실행될 기회가 없어짐. */}
            </ModalProvider>
        </>
    );
};

export default Netflix;

// img sample
// export const getImageUrl = (path, size = 400) => {
//   return `https://image.tmdb.org/t/p/w${size}${path}`;
// };
