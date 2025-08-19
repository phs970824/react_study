'use client';
import styles from '@/styles/netflix/browse/components/iconTextButton.module.scss';
import Link from 'next/link';

interface IconTextButtonProps {
    text: string;
    className: string;
    icon?: React.ReactNode;
    tag?: 'button' | 'link';
    href?: {
        pathname: string;
        query: {
            id: string;
        };
    };
    scroll?: boolean;
    onClick?: () => void;
}

const IconTextButton = ({
    text,
    className,
    icon,
    onClick,
    tag = 'button',
    href = { pathname: '', query: { id: '' } },
    scroll = false,
}: IconTextButtonProps) => {
    if (tag === 'button') {
        return (
            <button type="button" className={`${styles.iconTextButton} ${className}`} onClick={onClick}>
                {icon && icon}
                {text}
            </button>
        );
    }

    // link(a태그) 일 때
    return (
        <Link href={href} className={`${styles.iconTextButton} ${className}`}>
            {icon && icon}
            {text}
        </Link>
    );
};

export default IconTextButton;
