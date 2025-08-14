import styles from '@/styles/netflix/browse/components/iconButton.module.scss';

const IconButton = ({
    icon,
    className,
    alt,
    onClick,
}: {
    icon: React.ReactNode;
    className?: string;
    alt?: string;
    onClick?: () => void;
}) => {
    const defaultIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            data-icon="PlusStandard"
            aria-hidden="true">
            <path fillRule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
        </svg>
    );

    const iconContent = icon || defaultIcon;
    return (
        <button type="button" className={`${styles.iconButton} ${className}`} onClick={onClick}>
            {iconContent}
            {alt && <span className="blind">{alt}</span>}
        </button>
    );
};

export default IconButton;
