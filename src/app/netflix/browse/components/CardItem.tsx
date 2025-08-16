"use client";
import { cardItemType } from "@/lib/api/netflix/types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleModal from "./SimpleModal";

interface CardItemProps {
    item: cardItemType;
    className?: string;
    ref?: React.RefObject<HTMLDivElement | null> | null;
    isFirst?: boolean;
    isLast?: boolean;
}

const CardItem = ({ item, className, ref, isFirst, isLast }: CardItemProps) => {
    const [simpleModalOpen, setSimpleModalOpen] = useState(false);
    return (
        <div
            ref={ref ? ref : null}
            className={className}
            onMouseEnter={() => setSimpleModalOpen(true)}
            onMouseLeave={() => setSimpleModalOpen(false)}
        >
            <Link
                href={{
                    pathname: "/netflix/browse",
                    query: { id: item.id },
                }}
                scroll={false}
            >
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={1920}
                    height={1080}
                />
            </Link>

            {simpleModalOpen && (
                <SimpleModal data={item} isFirst={isFirst} isLast={isLast} />
            )}
        </div>
    );
};

export default CardItem;
