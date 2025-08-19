'use client';
import styles from '@/styles/netflix/browse/components/iconTextButton.module.scss';

interface IconTextButtonProps {
    text: string;
    className: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const IconTextButton = ({ text, className, icon, onClick }: IconTextButtonProps) => {
    return (
        <button type="button" className={`${styles.iconTextButton} ${className}`} onClick={onClick}>
            {icon && icon}
            {text}
        </button>
    );
};

export default IconTextButton;
