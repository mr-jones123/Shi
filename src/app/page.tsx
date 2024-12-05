"use client"
import Image from "next/image";
import { SpotifyWidget } from "@/components/spotifyWidget"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto h-screen">
        <section className="h-full flex flex-col justify-center items-center gap-5">
                <Image
                  src='/mine-modified.png'
                  alt = 'My Herhsey'
                  width={200}
                  height={200}
                  className="border border-transparent rounded-xl"/>
                <h2 className="text-white italic md:text-2xl">You are the light in my darkness. The calm of the storm within me.</h2>

        </section>
      </div>
      <SpotifyWidget />
    </div>
  );
}
