import { create } from 'zustand';

export const useSimpleModalStore = create((set) => ({
    isOpen: false,
    data: null,
    isFirst: false,
    isLast: false,
    position: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    },
    openModal: (data, isFirst, isLast, position) => set({ isOpen: true, data: data, isFirst, isLast, position: position }),
    closeModal: () =>
        set({
            isOpen: false,
            data: null,
            isFirst: false,
            isLast: false,
            position: {
                top: 0,
                left: 0,
                width: 0,
                height: 0,
            },
        }),
}));
