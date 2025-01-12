import { useState } from 'react'

export default function VideoPlayer() {
  const [error, setError] = useState(false)

  // Using a placeholder video URL - replace with your actual video content
  const videoUrl = "https://www.youtube.com/embed/CaQUxy_UiGA?si=GhHNhNSon0HCJ_uP"

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
      {error ? (
        <div className="flex h-full items-center justify-center p-4 text-center">
          <p>Não foi possível carregar o vídeo. Por favor, tente novamente mais tarde.</p>
        </div>
      ) : (
        <iframe
          src={videoUrl}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

