'use client';
import { sliderItemType } from '@/lib/api/netflix/types';
import Image from 'next/image';

const SliderItem = ({ item }: { item: sliderItemType }) => {
    return (
        <div className="sliderItem">
            <a href="">
                <Image src={item.thumbnail} alt={item.title} width={1920} height={1080} />
            </a>
        </div>
    );
};

export default SliderItem;
