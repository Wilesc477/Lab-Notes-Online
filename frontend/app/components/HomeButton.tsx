'use client';

import Link from 'next/link'
import Image from 'next/image';

const HomeButton = () => {
    return (
        <Link href="/">
            <button className="btn btn-ghost">
                <Image src="/Open-Book--Streamline-Flex.png" alt="Open Book" width={50} height={20} className="flex flex-none" />
            </button>
        </Link>
    )
}

export default HomeButton