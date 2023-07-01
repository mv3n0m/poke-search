'use client'

import Image from "next/image";


export default function({ imageUrl, pokemonName }: { imageUrl: string, pokemonName: string }) {
    return (
        <div className="h-[50vh] relative">
            <Image
                src={ imageUrl }
                alt={ "pokemon-" + pokemonName }
                fill priority objectFit="contain"
                className="transition-opacity opacity-0 duration-[5s]"
                onLoadingComplete={el => el.classList.remove("opacity-0")}
            />
        </div>
    )
}