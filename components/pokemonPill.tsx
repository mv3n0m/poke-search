'use client'

import Link from "next/link"


export default function({ name }: { name: string }) {
    return (
        <Link href={ name }
            className="border-4 text-blue-600 border-yellow-200 rounded-full text-2xl font-semibold h-14 pt-2 dark:text-yellow-300 dark:border-blue-600 hover:animate-pulse hover:shadow-lg hover:dark:shadow-zinc-700"
        >
            { name.charAt(0).toUpperCase() + name.slice(1) }
        </Link>
    )
}