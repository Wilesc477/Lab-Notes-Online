'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function HomeButton() {

    const router = useRouter();
    const handleBack = () => {
        router.back();
    };

    return (
        <button className="btn btn-ghost" onClick={handleBack}>
            <Image src="/Open-Book--Streamline-Flex.png" alt="Open Book" width={50} height={20} className="flex flex-none" />
        </button>
    )
}