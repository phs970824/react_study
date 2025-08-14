export type heroContType = {
    id: string;
    title: string;
    titleImage: string;
    image: string;
    video: string;
    videoPoster: string;
    description: string;
};

export type sliderItemType = {
    id: number;
    title: string;
    thumbnail: string;
};

export type categoryType = {
    id: string;
    title: string;
    items: sliderItemType[];
};
