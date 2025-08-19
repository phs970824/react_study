'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroContType } from '@/lib/api/netflix/types';
import { motion } from 'framer-motion';

// style
import styles from '@/styles/netflix/browse/components/heroSection.module.scss';
import IconButton from './IconTextButton';

const HeroSection = ({ heroData }: { heroData: heroContType }) => {
    const titleImageRef = useRef<HTMLImageElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const titleImage = titleImageRef.current;
        const desc = descRef.current;

        const updateAnimation = () => {
            if (titleImage && desc) {
                const descHeight = desc.offsetHeight;

                gsap.to(titleImage, {
                    scale: 0.7,
                    delay: 2,
                    duration: 1,
                    y: descHeight,
                });
                gsap.to(desc, {
                    scale: 0,
                    opacity: 0,
                    delay: 2,
                    duration: 1,
                });
            }
        };

        updateAnimation();

        window.addEventListener('resize', updateAnimation);

        return () => {
            window.removeEventListener('resize', updateAnimation);
        };
    }, []);

    return (
        <section className={styles.kv}>
            <h2 className="blind">특별 소개 콘텐츠</h2>
            <div className={styles.kv__inner}>
                <div className={styles['i-box']}>
                    <Image src={heroData.image} alt={heroData.title} width={1280} height={720} />
                    <span className={styles['layer-l']}></span>
                    <span className={styles['layer-b']}></span>
                </div>
                <div className={styles['t-box']}>
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 0.7 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        style={{ transformOrigin: 'left bottom' }}>
                        <Image src={heroData.titleImage} alt={heroData.title} width={612} height={260} ref={titleImageRef} />
                    </motion.div>
                    <motion.p
                        ref={descRef}
                        initial={{ scale: 1 }}
                        animate={{ scale: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        style={{ transformOrigin: 'left bottom' }}>
                        {heroData.description}
                    </motion.p>
                    <div className={styles['b-box']}>
                        <IconButton
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
                            text="상세 정보"
                            className={styles.kv__more}
                            icon={
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
                            }
                            tag="link"
                            href={{
                                pathname: '/netflix/browse',
                                query: { id: heroData.id },
                            }}
                            scroll={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
