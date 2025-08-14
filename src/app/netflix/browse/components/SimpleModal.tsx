'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SimpleModal = () => {
    const router = useRouter();
    const id = '1';

    const DetailModalOpen = (id: string) => {
        router.push(`/netflix/browse?id=${id}`);
    };

    return (
        <div>
            SimpleModal
            <Link
                href={{
                    pathname: '/netflix/browse',
                    query: { id: id },
                }}
                scroll={false}>
                open
            </Link>
        </div>
    );
};

export default SimpleModal;
