import styles from '@/styles/study/layout/header.module.scss';

const Header = ({ onClick }: { onClick: () => void }) => {
    return (
        <header className={styles.header}>
            <button type="button" onClick={onClick}>
                <h1>리액트 스터디</h1>
            </button>
        </header>
    );
};

export default Header;
