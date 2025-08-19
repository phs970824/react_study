import cardListMock from "@/lib/api/netflix/cardListMock.json";

export function cardListData(pageParam: number) {
    const MAX_PAGE = 7;

    const key = `category${pageParam}` as keyof typeof cardListMock;

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (pageParam <= MAX_PAGE) {
                res(cardListMock[key]);
            } else {
                rej(new Error("error"));
            }
        }, 2000);
    });
}
