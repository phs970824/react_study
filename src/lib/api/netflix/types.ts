export type sliderItemType = {
    id: number;
    title: string;
    thumbnail: string;
};

export type categoryType = {
    title: string;
    items: sliderItemType[];
};
