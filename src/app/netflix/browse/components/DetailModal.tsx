import styles from '@/styles/netflix/browse/components/detailModal.module.scss';
import IconTextButton from './IconTextButton';
import IconButton from './IconButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DetailModal = ({ id }: { id: string }) => {
    console.log(id);
    // 필요한 데이터
    // 제목, 장르, 출연배우, 영화 특징(키워드), 예고편, 19세여부, 줄거리, 관련 콘텐츠, 이외 가능한 상세정보(맨하단)

    const detailModalVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
        exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
    };

    const data = {
        title: '벤데타',
        titleImg:
            'https://occ-0-2794-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTuuHFxUlDDDtW6jSuYTr3KVBMNy1PC9-4VrfK5KRlU9k8N9l8UVBb03-dbmlkYITrkCyLwwfQCIiXurN5w15-CVjM7fI4AZEwmF19bNrrU.webp?r=ef0',
        genre: '힐링, 로맨틱',
        actor: ['알레산드로 가스만', '지네브라 프란체스코니', '레모 지로네', '알레시오 프라티코', '프란체스코 빌라노'],
        keyword: ['키워드1', '키워드2', '키워드3'],
        thumbnail:
            'https://occ-0-2794-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABblbGfkLFXGwaFM2QSUPJN6rWVI51o01w-EuNE20qOaB8MKdyfgYdW2OwxvrW0ZWmujPjeJdzbDTMgYM2p-N1Ce5RZLUn2jSnZLs.webp?r=9a3',
        videoURL: '테스트 예고편',
        age: false,
        time: '1시간 40분',
        openDate: '2025',
        story: '아무래도 찜찜하네. 용식은 까불이에게 한 가지 확인할 것이 있다. 어른이 된 종렬과 깡을 되찾은 규태. 동백에겐 기적이 일어날까, 하늘이 아닌 보통 사람들의 힘으로.',
        related: '테스트 관련 콘텐츠',
    };

    return (
        <div className={styles['detail-modal-container']}>
            <div className={styles.dim}></div>
            <motion.div className={styles.content} variants={detailModalVariants} initial="initial" animate="animate" exit="exit">
                <Link
                    href={{
                        pathname: '/netflix/browse',
                    }}
                    scroll={false}
                    className={styles['close-btn']}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="XStandard"
                        aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                            fill="currentColor"></path>
                    </svg>
                </Link>

                <section className={styles.kv}>
                    <div className={styles['kv__thumb']}>
                        <img src={data.thumbnail} alt="" />
                    </div>
                    <div className={styles['kv__info-box']}>
                        <div className={styles['kv__title']}>
                            {data.titleImg ? <img src={data.titleImg} alt={data.title} /> : <h2>{data.title}</h2>}
                        </div>
                        <div className={styles['kv__b-box']}>
                            <IconTextButton
                                text="재생"
                                className={styles.kv__play}
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
                                }
                            />
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
                                }
                                className={styles['kv__icon-btn']}
                            />
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
                                }
                                className={styles['kv__icon-btn']}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.info}>
                    <div>
                        <div className={styles['info-flex']}>
                            <p>{data.openDate}</p>
                            <p>{data.time}</p>
                            <p className="badge01">HD</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                role="img"
                                viewBox="0 0 16 16"
                                width="16"
                                height="16"
                                data-icon="SubtitlesSmall"
                                aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 1.75C0 1.33579 0.335786 1 0.75 1H15.25C15.6642 1 16 1.33579 16 1.75V12.25C16 12.6642 15.6642 13 15.25 13H12.75V15C12.75 15.2652 12.61 15.5106 12.3817 15.6456C12.1535 15.7806 11.8709 15.785 11.6386 15.6572L6.80736 13H0.75C0.335786 13 0 12.6642 0 12.25V1.75ZM1.5 2.5V11.5H7H7.19264L7.36144 11.5928L11.25 13.7315V12.25V11.5H12H14.5V2.5H1.5ZM6 6.5L3 6.5V5L6 5V6.5ZM13 7.5H10V9H13V7.5ZM3 9V7.5L9 7.5V9L3 9ZM13 5H7V6.5H13V5Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className={styles['icon-flex']}>
                            {data.age === true ? (
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                                        <path
                                            d="M88.7269 100H11.2731C5.04304 100 0 94.9584 0 88.7324V11.2756C0 5.04961 5.04304 0 11.2731 0H88.7269C94.949 0 100 5.04961 100 11.2756V88.7324C100 94.9504 94.957 100 88.7269 100Z"
                                            fill="#C52E37"></path>
                                        <path
                                            d="M21.1919 34.7552V84.451H36.6157V15.541H22.8171L15.6868 34.7552H21.1919Z"
                                            fill="white"></path>
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
                        </div>
                        <p className={styles.story}>{data.story}</p>
                    </div>
                    <div className={styles['info-right']}>
                        <p>
                            <span>출연:</span>
                            <span>
                                {data.actor.length > 3 ? (
                                    <>
                                        {data.actor.slice(0, 3).join(', ')}{' '}
                                        <a href="#about" className={styles['link-btn']}>
                                            더보기
                                        </a>
                                    </>
                                ) : (
                                    data.actor.join(', ')
                                )}
                            </span>
                        </p>
                        <p>
                            <span>장르:</span>
                            <span>{data.genre}</span>
                        </p>
                        <p>
                            <span>영화 특징:</span>
                            <span>
                                {data.keyword.map((keyword) => {
                                    return <span key={keyword}>{keyword}</span>;
                                })}
                            </span>
                        </p>
                    </div>
                </section>
                <section className="related"></section>
                <section className="about" id="about">
                    <div>
                        <h2>출연</h2>
                        <p></p>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default DetailModal;
