'use client';
import { sliderItemType } from '@/lib/api/netflix/types';
import Image from 'next/image';
import SimpleModal from './SimpleModal';

const SliderItem = ({ item }: { item: sliderItemType }) => {
    return (
        <div className="sliderItem">
            <a href={`/netflix/browse?id=${item.id}`}>
                <Image src={item.thumbnail} alt={item.title} width={1920} height={1080} />
            </a>
            <SimpleModal />
        </div>
    );
};

export default SliderItem;
