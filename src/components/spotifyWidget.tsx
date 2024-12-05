'use client'

export function SpotifyWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black rounded-lg shadow-lg overflow-hidden">
      <iframe
        src="https://open.spotify.com/embed/track/1FWsomP9StpCcXNWmJk8Cl?utm_source=generator"
        width="300"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  )
}


