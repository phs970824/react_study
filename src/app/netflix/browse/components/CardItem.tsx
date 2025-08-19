'use client';
import { cardItemType } from '@/lib/api/netflix/types';
import Image from 'next/image';
import Link from 'next/link';
import { useModal } from './ModalContext';
import { useEffect, useRef, useState } from 'react';

interface CardItemProps {
    item: cardItemType;
    className?: string;
    ref?: React.RefObject<HTMLDivElement | null> | null;
    isFirst: boolean;
    isLast: boolean;
}

// 마우츠 n초 머문 뒤 simpleModal 열리도록 상수 설정
const HOVER_DELAY = 500;

const CardItem = ({ item, className, isFirst = false, isLast = false }: CardItemProps) => {
    const cardItemRef = useRef<HTMLDivElement>(null);
    const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
    const { openModal } = useModal();

    const handleMouseEnter = () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }

        const timerId = setTimeout(() => {
            if (cardItemRef.current) {
                const rect = cardItemRef.current.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                openModal(
                    item,
                    { top: rect.top + scrollTop, left: rect.left + scrollLeft, width: rect.width, height: rect.height },
                    isFirst,
                    isLast
                );
            }
        }, HOVER_DELAY);

        setHoverTimer(timerId);
    };

    const handleMouseLeave = () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
    };
    useEffect(() => {
        return () => {
            // 타이머 정리
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
        };
    }, [hoverTimer]);

    return (
        <div ref={cardItemRef} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link
                href={{
                    pathname: '/netflix/browse',
                    query: { id: item.id },
                }}>
                <Image src={item.thumbnail} alt={item.title} width={1920} height={1080} />
            </Link>
        </div>
    );
};

export default CardItem;
