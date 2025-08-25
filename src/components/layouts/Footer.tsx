import styles from '@/styles/netflix/browse/components/footer.module.scss';
import Image from 'next/image';

const Footer = () => {
    const serviceList = [
        {
            title: '화면 해설',
        },
        {
            title: '고객 센터',
        },
        {
            title: '미디어 센터',
        },
        {
            title: '이용 약관',
        },
        {
            title: '개인정보',
        },
        {
            title: '회사 정보',
        },
        {
            title: '문의하기',
        },
        {
            title: '쿠키 설정',
        },
        {
            title: '법적 고지',
        },
        {
            title: '문의하기',
        },
        {
            title: '쿠키 설정',
        },
        {
            title: '법적 고지',
        },
    ];

    return (
        <footer className={styles.footer}>
            <h2 className="blind">회사 정보</h2>
            <div className={styles.footer__inner}>
                <div className={styles.sns}>
                    <a href="https://www.facebook.com/NetflixKR" target="_blank" aria-label="facebook">
                        <Image src="/images/icon/facebook.svg" alt="facebook" width={24} height={24} />
                    </a>

                    <a className="social-link" href="https://www.instagram.com/netflixkr/" target="_blank" aria-label="instagram">
                        <Image src="/images/icon/instagram.svg" alt="instagram" width={24} height={24} />
                    </a>

                    <a className="social-link" href="https://twitter.com/netflixkr" target="_blank" aria-label="twitter">
                        <Image src="/images/icon/twitter.svg" alt="twitter" width={24} height={24} />
                    </a>

                    <a
                        className="social-link"
                        href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured"
                        target="_blank"
                        aria-label="youtube">
                        <Image src="/images/icon/youtube.svg" alt="youtube" width={24} height={24} />
                    </a>
                </div>

                <div className={styles.service}>
                    <ul>
                        {serviceList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="">{item.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={styles.copy}>
                    <div>
                        <dt className="blind">회사명</dt>
                        <dd>
                            넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자
                            부담)
                        </dd>
                    </div>
                    <div>
                        <dt>대표 : </dt>
                        <dd>레지널드 숀 톰프슨</dd>
                    </div>

                    <div>
                        <dt>이메일 주소 :</dt>
                        <dd>
                            <a href="mailto:korea@netflix.com">korea@netflix.com</a>
                        </dd>
                    </div>

                    <div>
                        <dt>주소 : </dt>
                        <dd>대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</dd>
                    </div>
                    <div>
                        <dt>사업자등록번호 : </dt>
                        <dd>165-87-00119</dd>
                    </div>
                    <div>
                        <dt>클라우드 호스팅 : </dt>
                        <dd>Amazon Web Services Inc.</dd>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
