import styles from '@/styles/netflix/browse/components/detailModal.module.scss';
import IconTextButton from './IconTextButton';
import IconButton from './IconButton';

const DetailModal = ({ id }: { id: string }) => {
    // 필요한 데이터
    // 제목, 장르, 출연배우, 영화 특징(키워드), 예고편, 19세여부, 줄거리, 관련 콘텐츠, 이외 가능한 상세정보(맨하단)

    const data = {
        title: '벤데타',
        titleImg:
            'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRHOeWAbQV2hc-RlLKLtTAwJMLjN9dQ-wN0BKmOiSRqP7wS_wRM_ajSPnlM-4th5REHnVmK8cmD5uOQu63LIng9FrzIxhljILcJJ1xQHsUlmHanQxSRvjR9d32OuXvYUo5NNjqm8uRw1n8kpFSN7Z4TzFQ70Tn2CeAPOU7wKNH-5HGJjmsBq.webp?r=977',
        genre: '장르',
        actor: ['알레산드로 가스만', '지네브라 프란체스코니', '레모 지로네', '알레시오 프라티코', '프란체스코 빌라노'],
        keyword: ['키워드1', '키워드2', '키워드3'],
        thumbnail:
            'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfrvFGe-NBowXSRoUBkKECkccl34u1FU5J3kbDuJz6W9uzhq8LGiJI0pMBayv2vBew05DkAhdWOoTQHsQ1QY0kCfR8vQq10K7IFj.webp?r=437',
        videoURL: '테스트 예고편',
        age: true,
        time: '1시간 40분',
        openDate: '2025',
        story: '전직 암살자와 그 딸이 오랜 적들을 상대로 복수를 펼치는 박진감 만점의 영화. 91개국에서 TOP 10 리스트에 진입했다.',
        related: '테스트 관련 콘텐츠',
    };

    return (
        <div className={styles['detail-modal-container']}>
            <div className={styles.dim}></div>
            <div className={styles.content}>
                <div className={styles['close-btn-wrap']}>
                    <IconButton
                        icon={
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
                                    clip-rule="evenodd"
                                    d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                                    fill="currentColor"></path>
                            </svg>
                        }
                        alt="닫기"
                    />
                </div>

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
                                            clip-rule="evenodd"
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
                                            clip-rule="evenodd"
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
                        <div className="info__flex">
                            <p>
                                {data.openDate} {data.time}
                            </p>
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
                                    clip-rule="evenodd"
                                    d="M0 1.75C0 1.33579 0.335786 1 0.75 1H15.25C15.6642 1 16 1.33579 16 1.75V12.25C16 12.6642 15.6642 13 15.25 13H12.75V15C12.75 15.2652 12.61 15.5106 12.3817 15.6456C12.1535 15.7806 11.8709 15.785 11.6386 15.6572L6.80736 13H0.75C0.335786 13 0 12.6642 0 12.25V1.75ZM1.5 2.5V11.5H7H7.19264L7.36144 11.5928L11.25 13.7315V12.25V11.5H12H14.5V2.5H1.5ZM6 6.5L3 6.5V5L6 5V6.5ZM13 7.5H10V9H13V7.5ZM3 9V7.5L9 7.5V9L3 9ZM13 5H7V6.5H13V5Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <p className="story">{data.story}</p>
                    </div>
                    <div>
                        <p>
                            <span>출연:</span>
                            {data.actor.length > 3 ? (
                                <>
                                    {data.actor.slice(0, 3).join(', ')} <a href="#about">더보기</a>
                                </>
                            ) : (
                                data.actor.join(', ')
                            )}
                        </p>
                        <p>
                            <span>장르:</span>
                        </p>
                        <p>
                            <span>영화 특징:</span>
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
            </div>
        </div>
    );
};

export default DetailModal;
