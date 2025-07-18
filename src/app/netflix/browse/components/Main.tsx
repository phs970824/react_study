import Image from 'next/image';
import styles from '@/styles/netflix/browse/components/main.module.scss';

const Main = () => {
    const data = [
        {
            id: 0,
            title: '타이틀1',
            movie: [
                {
                    id: 0,
                    title: '영화1',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
                {
                    id: 1,
                    title: '영화2',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
                {
                    id: 2,
                    title: '영화3',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
                {
                    id: 3,
                    title: '영화4',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
                {
                    id: 4,
                    title: '영화5',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
                {
                    id: 5,
                    title: '영화6',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
                {
                    id: 6,
                    title: '영화7',
                    poster: 'https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd98oKgCH9JvkO60g69tQa7G98g6iIPKJY3EeKrDoxx4fuJZJ22WuDyVEEGykc9mGgQZHFMUZeS5Jn3HdrQOD_AVxYYRCcpjBQQajXeIomJVTIkH9oUZhOAWe57dkaVZLQl1.jpg?r=c46',
                },
            ],
        },
    ];

    return (
        <main>
            <section className={styles.kv}>
                <h2 className="blind">특별 소개 콘텐츠</h2>
                <div className={styles.kv__inner}>
                    <div className={styles['i-box']}>
                        {/* <Image src="/images/01_thumb.webp" alt="" width={1920} height={1080} /> */}
                        <Image src="" alt="" width={1920} height={1080} />
                        <span className={styles.layer}></span>
                    </div>
                    <div className={styles['t-box']}>
                        <Image src="/images/02_tit.webp" alt="" width={300} height={300} />
                        <p>
                            마침내 탄지로의 칼날이 모두 벼려졌다! 피에 굶주린 혈귀의 습격으로 가족을 잃고 여동생마저
                            저주에 걸린 소년. 가혹한 운명의 사슬을 끊어내고 세상에서 혈귀를 멸하려, 지금 탄지로가 복수의
                            칼날을 높이 든다.
                        </p>
                        <div className={styles['b-box']}>
                            <button type="button" className={styles.kv__play}>
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
                                재생
                            </button>
                            <button type="button" className={styles.kv__more}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    data-icon="CircleIStandard"
                                    aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                        fill="currentColor"></path>
                                </svg>
                                상세 정보
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {data.map((item) => {
                return (
                    <section className="sc-content" key={item.id}>
                        <h2>{item.title}</h2>
                    </section>
                );
            })}
        </main>
    );
};

export default Main;
