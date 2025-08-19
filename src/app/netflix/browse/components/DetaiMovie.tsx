import mockData from '@/lib/api/netflix/mockData.json';
import Image from 'next/image';
import Link from 'next/link';
import IconButton from './IconButton';

import styles from '@/styles/netflix/browse/components/detailMovie.module.scss';

const DetailMovie = () => {
    const contentsList = mockData.category1.items;

    return (
        <div>
            <strong className={styles.title}>함께 시청된 콘텐츠</strong>
            <ul className={styles.list}>
                {contentsList.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link
                                href={{
                                    pathname: '/netflix/browse',
                                    query: { id: item.id },
                                }}>
                                <div className={styles['i-box']}>
                                    <Image src={item.thumbnail} alt={item.title} width={1920} height={1080} />
                                </div>
                                <div className={styles['t-box']}>
                                    <div className={styles.flex}>
                                        <svg viewBox="0 0 100 100">
                                            <path
                                                id="Fill---Green"
                                                fill="#269251"
                                                d="M88.729 100H11.274C5.051 100 0 94.954 0 88.728V11.274C0 5.048 5.051 0 11.274 0H88.73C94.956 0 100 5.048 100 11.274v77.454C100 94.954 94.956 100 88.729 100"></path>
                                            <path
                                                id="Combined-Shape"
                                                fill="#FFFFFE"
                                                d="M68.776 24.428l11.274.001-.004 40.523h13.27V75.1l-24.54-.005V24.428zm-51.928.001l12.335.002L39.86 74.967l.004.131H28.589l-1.196-7.559-8.751.004-1.194 7.552-11.278.003v-.135L16.848 24.43zm36.277-.001v40.524h13.262v10.146h-24.54v-50.67h11.278zM23.015 40.74L20.23 57.987H25.8L23.015 40.74z"></path>
                                        </svg>
                                        <p>HD</p>
                                        <p>2019</p>

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
                                                        data-icon="PlusStandard"
                                                        aria-hidden="true">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                                                            fill="#fff"></path>
                                                    </svg>
                                                }></IconButton>
                                        </div>
                                    </div>
                                    <p className={styles.story}>
                                        이것은 날 만든 인간에 대한 역습이다! 최강의 포켓몬을 연구하던 과학자들에 의해 태어난 뮤츠의 복수
                                        선언. 과연 지우와 피카츄 일행은 이 강적을 막아낼 수 있을 것인가?
                                    </p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DetailMovie;
