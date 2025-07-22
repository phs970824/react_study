'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const Netflix = () => {
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

    console.log(data);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Netflix;

// img sample
// export const getImageUrl = (path, size = 400) => {
//   return `https://image.tmdb.org/t/p/w${size}${path}`;
// };
