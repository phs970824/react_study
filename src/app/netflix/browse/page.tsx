import { Suspense } from 'react';
import NetflixClient from './components/NetflixClient';

const Netflix = () => {
    return (
        <>
            <Suspense fallback={<div>로딩 중...</div>}>
                <NetflixClient />
            </Suspense>
        </>
    );
};

export default Netflix;
