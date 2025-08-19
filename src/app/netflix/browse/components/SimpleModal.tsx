'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '@/styles/netflix/browse/components/simpleModal.module.scss';

// components
import { cardItemType } from '@/lib/api/netflix/types';
import { useModal } from './ModalContext';
import IconButton from './IconButton';

const SimpleModal = ({ data, isFirst, isLast }: { data: cardItemType; isFirst?: boolean; isLast?: boolean }) => {
    const isAdult = false;

    return (
        <div className={`${styles.simpleModalWrap} ${isFirst ? styles.first : ''} ${isLast ? styles.last : ''}`}>
            <div className={styles['i-box']}>
                <Image src={data.thumbnail} alt={data.title} width={1920} height={1080} />
            </div>
            <Link
                href={{
                    pathname: '/netflix/browse',
                    query: { id: data.id },
                }}
                className={styles['t-wrap']}>
                <div className={`${styles.flex} ${styles['btn-box']}`}>
                    <IconButton
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                data-icon="PlayStandard"
                                aria-hidden="true">
                                <path
                                    d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                                    fill="currentColor"></path>
                            </svg>
                        }></IconButton>
                    <div>
                        <IconButton
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    data-icon="PlusStandard"
                                    aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                                        fill="currentColor"></path>
                                </svg>
                            }></IconButton>
                        <p className={styles.text}>내가 찜한 콘텐츠에 추가</p>
                    </div>
                    <div>
                        <IconButton
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    data-icon="ThumbsUpStandard"
                                    aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                                        fill="currentColor"></path>
                                </svg>
                            }></IconButton>
                        <p className={styles.text}>좋아요</p>
                    </div>
                    <div className={styles['flex-right']}>
                        <IconButton
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    data-icon="ChevronDownStandard"
                                    aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 15.5859L19.2928 8.29297L20.7071 9.70718L12.7071 17.7072C12.5195 17.8947 12.2652 18.0001 12 18.0001C11.7347 18.0001 11.4804 17.8947 11.2928 17.7072L3.29285 9.70718L4.70706 8.29297L12 15.5859Z"
                                        fill="currentColor"></path>
                                </svg>
                            }></IconButton>
                        <p className={styles.text}>회차 및 상세정보</p>
                    </div>
                </div>
                <div className={`${styles.flex} ${styles['info-box']}`}>
                    {isAdult ? (
                        <span>
                            <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                                <path
                                    d="M88.7269 100H11.2731C5.04304 100 0 94.9584 0 88.7324V11.2756C0 5.04961 5.04304 0 11.2731 0H88.7269C94.949 0 100 5.04961 100 11.2756V88.7324C100 94.9504 94.957 100 88.7269 100Z"
                                    fill="#C52E37"></path>
                                <path d="M21.1919 34.7552V84.451H36.6157V15.541H22.8171L15.6868 34.7552H21.1919Z" fill="white"></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M43.5229 15.541H81.8435C82.688 15.541 83.3812 16.2292 83.3812 17.0695V82.9066C83.3812 83.7548 82.696 84.4431 81.8435 84.4431H44.0647C43.2202 84.4431 42.5271 83.7548 42.5271 82.9066V62.436H57.4968V71.4549H68.4114V54.8576H45.0526C43.3636 54.8576 41.9854 53.4812 41.9854 51.7766V17.0775C41.9854 16.2292 42.6705 15.541 43.5229 15.541ZM58.7635 28.2171C57.9191 28.2171 57.226 28.9053 57.226 29.7536V41.8134C57.226 42.6617 57.9111 43.3499 58.7635 43.3499H66.6826C67.5271 43.3499 68.2202 42.6617 68.2202 41.8134V29.7536C68.2202 28.9053 67.5351 28.2171 66.6826 28.2171H58.7635Z"
                                    fill="white"></path>
                            </svg>
                        </span>
                    ) : (
                        <span>
                            <svg width="24" height="24" viewBox="0 0 100 100">
                                <path
                                    id="Fill---Yellow"
                                    fill="#DFB039"
                                    d="M88.724 100h-77.45C5.049 100 0 94.954 0 88.728V11.274C0 5.048 5.048 0 11.275 0h77.449C94.949 0 100 5.048 100 11.274v77.454C100 94.954 94.95 100 88.724 100"></path>
                                <path
                                    id="path12"
                                    fill="#000"
                                    d="M36.92 15.484v68.647H21.553V34.62h-5.48l7.097-19.136h13.75zm44.288 0c.848 0 1.535.687 1.535 1.533v18.144c0 1.018-.044 1.885-.133 2.605a8.067 8.067 0 01-.493 1.975 14.48 14.48 0 01-.9 1.843c-.362.631-.84 1.363-1.44 2.204L60.643 70.653h21.923v13.394H41.59v-10.07l26.152-37.29V28.42H57.136v9.345H42.127V17.017c0-.846.687-1.533 1.534-1.533z"></path>
                            </svg>
                        </span>
                    )}
                    <p>에피소드 9개</p>
                    <p className={styles.hd}>HD</p>
                </div>
                <ul className={`${styles.flex} ${styles.keywords}`}>
                    {/* {data.keywords.map((keyword) => (
                        <li key={keyword}>{keyword}</li>
                    ))} */}
                    <li>순한 맛 코미디</li>
                    <li>재밌는</li>
                    <li>사회 실험</li>
                </ul>
            </Link>
        </div>
    );
};

export const GlobalModal = () => {
    const { simpleModalOpen, modalData, isFirst, isLast, modalPosition, closeModal } = useModal();

    const modalVariants = {
        initial: {
            scale: 0.7,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween' as const,
                duration: 0.25,
            },
        },
        exit: {
            scale: 0.7,
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
        <AnimatePresence>
            {simpleModalOpen && modalData && (
                <motion.div
                    key={modalData.id}
                    style={{
                        position: 'absolute',
                        top: modalPosition?.top,
                        left: modalPosition?.left,
                        width: modalPosition?.width,
                        height: modalPosition?.height,
                    }}
                    variants={modalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onMouseLeave={closeModal}>
                    <SimpleModal data={modalData} isFirst={isFirst} isLast={isLast} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SimpleModal;
