"use client"
import { useRouter } from "next/navigation"

export default function ListNotebooks({ notebooks }) {
    const router = useRouter()

    function handleLoad(title) {
        router.push(`/write?title=${title}`)
    }

    return (
        <>
            {notebooks.map((notebook) => (
                <button
                    className="btn w-3/4"
                    key={notebook.id}
                    onClick={() => handleLoad(notebook.title)}
                >
                    <li>{notebook.title}</li>
                </button>
            ))}
        </>
    )
}