'use client';

import { AnimatePresence } from 'motion/react';
import DetailModal from './DetailModal';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const DetailModalWrap = () => {
    const searchParams = useSearchParams();
    const selecteId = searchParams.get('id');

    useEffect(() => {
        const wrap = document.getElementById('wrap');
        if (wrap) {
            selecteId ? (wrap.style.position = 'fixed') : (wrap.style.position = 'relative');
        }
    }, [selecteId]);

    return <AnimatePresence>{selecteId && <DetailModal id={selecteId} key="modal" />}</AnimatePresence>;
    {
        /* key="modal" 을 사용하는 이유 :
            모달이 DOM에서 즉시 제거되지 않고, exit 애니메이션이 끝날 때까지 기다림
            어떤 컴포넌트가 사라져야 하는지 React가 판단하기 위해 key값 필요
            key값이 없으면 모달이 즉시 DOM에서 제거되어 Framer Motion의 exit 애니메이션이 실행될 기회가 없어짐. */
    }
};

export default DetailModalWrap;
