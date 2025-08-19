import { cardItemType } from '@/lib/api/netflix/types';
import { createContext, useContext, useState } from 'react';

// context type
interface ModalPosition {
    top: number;
    left: number;
    width: number;
    height: number;
}
interface ModalContextType {
    simpleModalOpen: boolean;
    modalData: cardItemType | null;
    isFirst: boolean;
    isLast: boolean;
    modalPosition: ModalPosition | null;
    openModal: (data: cardItemType, position: ModalPosition, isFirst: boolean, isLast: boolean) => void;
    closeModal: () => void;
}

// context 생성
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// provider 감싸기
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [simpleModalOpen, setSimpleModalOpen] = useState(false);
    const [modalData, setModalData] = useState<cardItemType | null>(null);
    const [isFirst, setIsFirst] = useState(false);
    const [isLast, setIsLast] = useState(false);
    const [modalPosition, setModalPosition] = useState<ModalPosition | null>(null);

    const openModal = (data: cardItemType, position: ModalPosition, isFirst: boolean = false, isLast: boolean = false) => {
        setModalData(data);
        setIsFirst(isFirst);
        setIsLast(isLast);
        setSimpleModalOpen(true);
        setModalPosition(position);
    };

    const closeModal = () => {
        setSimpleModalOpen(false);
    };

    return (
        <ModalContext.Provider value={{ simpleModalOpen, modalData, isFirst, isLast, modalPosition, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('ModalProvider를 사용할 수 없습니다.');
    }
    return context;
};
